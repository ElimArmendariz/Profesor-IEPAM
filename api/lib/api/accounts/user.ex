defmodule Api.Accounts.User do
  use Ecto.Schema
  import Ecto.Changeset

  schema "users" do
    field :academiclevel, :string
    field :address, :string
    field :age, :string
    field :email, :string
    field :laboralxp, :string
    field :name, :string
    field :password, :string
    field :phone, :string

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:email, :password, :name, :phone, :address, :age, :academiclevel, :laboralxp])
    |> validate_required([:email, :password, :name, :phone, :address, :age, :academiclevel, :laboralxp])
  end
end
