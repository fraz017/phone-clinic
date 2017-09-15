class PageController < ApplicationController
  def index
  end

  def contact
  	params.permit!
    ContactMailer.send_email(params[:name], params[:email], params[:message], params[:phone], params[:address]).deliver_now
    redirect_to root_url
  end
end
