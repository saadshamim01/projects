from tkinter.ttk import Progressbar
from tkinter import *
import time

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

def bar():
    l4 =Label(w, text='Loading...', fg = 'white', bg = '#249794')
    lst4 = ('Calirbi (Body)', 10)
    l4.configure(font=lst4)
    l4.place(x=0, y=210)

    r = 0
    for i in range(100):
        progress['value'] = r
        w.update_idletasks()
        time.sleep(0.03)
        r = r + 1
    w.destroy()
    main_window()

progress.place(x=-10, y=235)

# Adding Frame
Frame(w, width = 427, height = 241, bg = '#249794').place(x=0, y=0)
b1.button(w, width = 10, height = 1, text = 'Get Started', command = bar, border = 0, fg = '#249794')
b1.place(x=170, y=200)





