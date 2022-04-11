defmodule ApiWeb.Schema do
  use Absinthe.Schema

  alias ApiWeb.Schema

  import_types(Schema.Subject)

  query do
    import_fields(:get_courses)
    import_fields(:get_course)
  end

  mutation do
    import_fields(:create_course)
    import_fields(:update_course)
    import_fields(:delete_course)
  end
end
