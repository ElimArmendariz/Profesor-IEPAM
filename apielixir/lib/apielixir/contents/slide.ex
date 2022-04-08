defmodule Apielixir.Contents.Slide do
  use Ecto.Schema
  import Ecto.Changeset

  schema "slides" do
    field :description, :string
    field :order, :integer
    field :video, :boolean
    field :question, :boolean
    field :answer1, :string
    field :answer2, :string
    field :answer3, :string
    field :answer4, :string
    field :correct_ans, :integer
    belongs_to :course, Apielixir.Training.Course, foreign_key: :course_id
    timestamps()
  end

  @doc false
  def changeset(slide, attrs) do
    slide
    |> cast(attrs, [:description, :order, :video, :question, :answer1, :answer2, :answer3, :answer4, :correct_ans, :course])
    |> validate_required([:description, :order, :video, :question, :answer1, :answer2, :answer3, :answer4, :correct_ans, :course])
  end
end
