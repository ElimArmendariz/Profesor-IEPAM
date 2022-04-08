defmodule Apielixir.Repo do
  use Ecto.Repo,
    otp_app: :apielixir,
    adapter: Ecto.Adapters.Postgres
end
