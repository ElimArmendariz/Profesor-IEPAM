defmodule Apielixir.Repo.Migrations.CreateCourseTable do
  use Ecto.Migration

  def change do
    create table(:courses) do
      add :name, :string
      add :description, :string
      add :active, :boolean
      timestamps()
    end
  end
end
