defmodule Apielixir.Repo.Migrations.CreateSlideTable do
  use Ecto.Migration

  def change do
    create table(:slides) do
      add :description, :string
      add :order, :integer
      add :video, :boolean
      add :question, :boolean
      add :answer1, :string
      add :answer2, :string
      add :answer3, :string
      add :answer4, :string
      add :correct_ans, :integer
      add :course_id, references(:courses, on_delete: :delete_all)
      timestamps()
    end

    create index(:slides, [:course_id])
  end
end
