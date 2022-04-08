defmodule Api.Schema do
  use Absinthe.Schema

  import_types Api.Schema.Subject

  query do
    @desc "Get a list of items"
    field :course, list_of(:course) do
      resolve fn _parent, _args, _resolution ->
        {:ok, Api.Subject.list_courses()}
      end
    end
  end
end
