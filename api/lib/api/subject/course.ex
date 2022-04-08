defmodule Api.Subject.Course do
  use Ecto.Schema
  import Ecto.Changeset

  schema "courses" do
    field :active, :boolean, default: false
    field :description, :string
    field :name, :string

    timestamps()
  end

  @doc false
  def changeset(course, attrs) do
    course
    |> cast(attrs, [:name, :description, :active])
    |> validate_required([:name, :description, :active])
  end
end
