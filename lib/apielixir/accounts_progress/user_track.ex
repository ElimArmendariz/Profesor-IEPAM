defmodule Apielixir.AccountsProgress.UserTrack do
  use Ecto.Schema
  import Ecto.Changeset

  schema "user_track" do
    field :date_init, :naive_datetime
    field :date_finish, :naive_datetime
    belongs_to :course, Apielixir.Training.Course, foreign_key: :course_id
    belongs_to :user, Apielixir.Accounts.User, foreign_key: :user_id
    timestamps()
  end

  @doc false
  def changeset(user_track, attrs) do
    user_track
    |> cast(attrs, [:date_init, :date_finish, :course, :user])
    |> validate_required([:date_init, :date_finish, :course, :user])
  end
end
