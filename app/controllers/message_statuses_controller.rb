class MessageStatusesController < ApplicationController
  def update
    @status = MessageStatus.find(params[:id])
    @status.is_seen = message_status_params[:is_seen]
    @status.save!
    render 'api/message_statuses/show'
  end

  private

  def message_status_params
    params.require(:message_status).permit(:is_seen)
  end
end
