defmodule Apielixir.Accounts.User do
  use Ecto.Schema
  import Ecto.Changeset

  schema "users" do
    field :email, :string
    field :password, :string
    field :name, :string
    field :phone, :string
    field :address, :string
    field :age, :string
    field :academiclevel, :string
    field :laboralxp, :string
    has_many :user_track, Apielixir.AccountsProgress.UserTrack, on_delete: :delete_all
    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:email, :password])
    |> validate_required([:name, :password])
  end
end
