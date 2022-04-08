defmodule Apielixir.Training.Course do
  use Ecto.Schema
  import Ecto.Changeset

  schema "courses" do
    field :name, :string
    field :description, :string
    field :active, :boolean
    has_many :slides, Apielixir.Contents.Slide, on_delete: :delete_all
    has_many :user_track, Apielixir.AccountsProgress.UserTrack, on_delete: :delete_all
    timestamps()
  end

  @doc false
  def changeset(course, attrs) do
    course
    |> cast(attrs, [:name, :description, :active])
    |> validate_required([:name, :description, :active])
  end
end
