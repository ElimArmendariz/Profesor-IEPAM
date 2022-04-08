defmodule Apielixir.Training do
  @moduledoc """
  The Coins context.
  """

  import Ecto.Query, warn: false
  alias Apielixir.Repo

  alias Apielixir.Training.Course

  @doc """
  Returns the list of course.

  ## Examples

      iex> list_course_wallet()
      [%course{}, ...]

  """
  def list_courses do
    Repo.all(Course)
  end

  @doc """
  Gets a single course.

  Raises `Ecto.NoResultsError` if the course wallet does not exist.

  ## Examples

      iex> get_course!(123)
      %courseWallet{}

      iex> get_course!(456)
      ** (Ecto.NoResultsError)

  """
  def get_course!(id), do: Repo.get!(Course, id)

  @doc """
  Creates a course.

  ## Examples

      iex> create_course(%{field: value})
      {:ok, %course{}}

      iex> create_course(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_course(attrs \\ %{}) do
    %Course{}
    |> Course.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a course.

  ## Examples

      iex> update_course(course, %{field: new_value})
      {:ok, %course{}}

      iex> update_course(course, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_course(%Course{} = course, attrs) do
    Course
    |> Course.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a course.

  ## Examples

      iex> delete_course(course)
      {:ok, %course{}}

      iex> delete_course(course)
      {:error, %Ecto.Changeset{}}

  """
  def delete_course(%Course{} = course) do
    Repo.delete(course)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking course changes.

  ## Examples

      iex> change_course(course)
      %Ecto.Changeset{data: %course{}}

  """
  def change_course(%Course{} = course, attrs \\ %{}) do
    Course.changeset(course, attrs)
  end
end
