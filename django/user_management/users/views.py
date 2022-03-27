from django.shortcuts import render, redirect
from django.contrib import messages
from django.views import View

from .forms import RegisterForm, LoginForm

# Create your views here.


class CustomLoginView(View):
    form_class = LoginForm

    def form_valid(self, form):
        remember_me = form.cleaned_data.get('remember_me')

        if not remember_me:
            self.request.session.set_expiry(0)
            self.request.session.modified = True

        return super(CustomLoginView, self).form_valid(form)


class RegisterView(View):
    form_class= RegisterForm
    initial = {'key': 'value'}
    template_name = 'users/register.html'


    def get(self, request, *args, **kwargs):
        form = self.form_class(initial=self.initial)
        return render(request, self.template_name, {'form': form})

    def post(self, request, *args, **kwargs):
        form = self.form_class(request.POST)

        if form.is_valid():
            form.save()

            username = form.cleaned_data.get('username')
            messages.success(request, f'Account created for {username}')

            return redirect(to='login')

        return render(request, self.template_name, {'form': form})

    def dispatch(self, request, *args, **kwargs):

        if request.user.is_authenticated:
            redirect('/')

        return super(RegisterView, request).dispatch(self, *args, **kwargs)

def home(request):
    return render(request, 'users/home.html')