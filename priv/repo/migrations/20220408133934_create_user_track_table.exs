defmodule Apielixir.Repo.Migrations.CreateUserTrackTable do
  use Ecto.Migration

  def change do
    create table(:user_track) do
      add :date_init, :naive_datetime
      add :date_finish, :naive_datetime
      add :user_id, references(:users, on_delete: :delete_all)
      add :course_id, references(:courses, on_delete: :delete_all)
      timestamps()
    end

    create index(:user_track, [:user_id])
    create index(:user_track, [:course_id])

  end
end
