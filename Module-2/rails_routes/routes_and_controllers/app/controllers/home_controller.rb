class HomeController < ApplicationController

   ## This is a controller action called about_us
   def about_us
     render text: "hello from Rails! This is all about us..."
   end

   def contact
     redirect_to '/contact'
   end

 end
