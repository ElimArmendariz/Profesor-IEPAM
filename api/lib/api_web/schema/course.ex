defmodule Api.Schema.Subject do
  use Absinthe.Schema.Notation

  object :course do
    field :id, :id
    field :name, :string
    field :description, :string
    field :active, :boolean
  end

end
