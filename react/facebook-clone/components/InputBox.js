import React, { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRef } from "react";
import { db, storage } from "../firebase";
import firebase from "firebase";
import {
  CameraIcon,
  EmojiHappyIcon,
  VideoCameraIcon,
} from "@heroicons/react/solid";

function InputBox() {
  const session = useSession();
  const inputRef = useRef(null);
  const filepickerRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);

  const sendPost = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;

    db.collection("posts")
      .add({
        message: inputRef.current.value,
        name: session.data.user.name,
        email: session.data.user.email,
        image: session.data.user.image,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((doc) => {
        if (imageToPost) {
          const uploadTask = storage
            .ref(`posts/${doc.id}`)
            .putString(imageToPost, "data_url");

          removeImage();

          uploadTask.on(
            "state_changed",
            null,
            (error) => {
              // ERROR function
              console.log(error);
            },
            () => {
              // COMPLETE function
              storage
                .ref("posts")
                .child(doc.id)
                .getDownloadURL()
                .then((url) => {
                  db.collection("posts").doc(doc.id).set(
                    {
                      postImage: url,
                    },
                    { merge: true }
                  );
                });
            }
          );
        }
      });

    inputRef.current.value = "";
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };

  const removeImage = () => {
    setImageToPost(null);
  };

  return (
    <div className="bg-white p-2 rounded-2xl drop-shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 p-4 items-center">
        <Image
          src={session.data.user.image}
          className="rounded-full"
          height={40}
          width={40}
          layout="fixed"
        />
        <form className="flex flex-1">
          <input
            className="rounded-full h-12  bg-gray-100 flex-grow px-5 focus:outline-none"
            type="text"
            ref={inputRef}
            placeholder={`What's on your mind, ${session.data.user.name}?`}
          />
          <button hidden type="submit" onClick={sendPost}>
            Submit
          </button>
        </form>

        {imageToPost && (
          <div
            className="flex flex-col filter hover:brightness-150 transition duration-150 transform hover:scale-105 cursor-pointer"
            onClick={removeImage}
          >
            <img className="h-10 object-contain" src={imageToPost} alt="" />
            <p className="text-xs text-red-500">Remove</p>
          </div>
        )}
      </div>

      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl-text-base">Live Video</p>
        </div>

        <div
          onClick={() => filepickerRef.current.click()}
          className="inputIcon"
        >
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl-text-base">Photo/Video</p>
          <input
            type="file"
            ref={filepickerRef}
            onChange={addImageToPost}
            hidden
          />
        </div>

        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl-text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
