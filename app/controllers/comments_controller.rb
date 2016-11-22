class CommentsController < ApplicationController

  def index
    @comments = Comment.all
  end

  def create
    @comment = Comment.new(comment_params)

    respond_to do |f|
      f.html { redirect_to comments_path }
      f.js
    end

    if @comment.save
      redirect_to comments_path
    else
      flash[:note] = 'Return to sender, address unknown. No such number, no such zone.'
      render 'form'
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:comment,
                                    :user)
  end

end
