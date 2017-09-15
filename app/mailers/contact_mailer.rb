class ContactMailer < ApplicationMailer
	default from: "no.reply.suavis@gmail.com"

  def send_email(name, email, phone, address, message)
    mails = ["fraz.ahsan17@gmail.com"]
    @name = name
    @email = email
    @message = message
    @phone = phone
    @address = address
    mail(to: mails.join(","), subject: 'New Contact Query')
  end
end
