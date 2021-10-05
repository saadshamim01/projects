from tkinter.ttk import Progressbar
from tkinter import *

w = Tk()
w.geometry('450x250')

width_of_window = 427
height_of_window = 250
screen_width = w.winfo_screenwidth()
screen_height = w.winfo_screenheight()

x_coordinate = (screen_width/2) - (width_of_window/2)
y_coordinate = (screen_height/2) - (height_of_window/2)
w.geometry("%dx%d+%d+%d"%(width_of_window, height_of_window, x_coordinate, y_coordinate))

#w.overrideredirect(1)

def main_window():
    q = Tk()
    q.geometry('427x250')
    l1 = Label(w, text="ADD TEXT HERE", fg=None)
    l = ('Calirbi (Body)', 24, 'bold')
    l1.config(font=1)
    l1.place(x=200, y=125)
    q.mainloop()

main_window()




