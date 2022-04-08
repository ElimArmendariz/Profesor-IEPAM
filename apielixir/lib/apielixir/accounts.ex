defmodule Apielixir.Accounts do
  @moduledoc """
  The Coins context.
  """

  import Ecto.Query, warn: false
  alias Apielixir.Repo

  alias Apielixir.Accounts.Slide

  @doc """
  Returns the list of slide.

  ## Examples

      iex> list_slides()
      [%Slide{}, ...]

  """
  def list_slides do
    Repo.all(Slide)
  end

  @doc """
  Gets a single slide.

  Raises `Ecto.NoResultsError` if the Slide wallet does not exist.

  ## Examples

      iex> get_slide!(123)
      %SlideWallet{}

      iex> get_slide!(456)
      ** (Ecto.NoResultsError)

  """
  def get_slide!(id), do: Repo.get!(Slide, id)

  @doc """
  Creates a slide.

  ## Examples

      iex> create_slide(%{field: value})
      {:ok, %Slide{}}

      iex> create_slide(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_slide(attrs \\ %{}) do
    %Slide{}
    |> Slide.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a slide.

  ## Examples

      iex> update_slide(slide, %{field: new_value})
      {:ok, %Slide{}}

      iex> update_slide(slide, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_slide(%Slide{} = slide, attrs) do
    slide
    |> Slide.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a slide.

  ## Examples

      iex> delete_slide(slide)
      {:ok, %Slide{}}

      iex> delete_slide(slide)
      {:error, %Ecto.Changeset{}}

  """
  def delete_slide(%Slide{} = slide) do
    Repo.delete(slide)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking slide changes.

  ## Examples

      iex> change_slide(slide)
      %Ecto.Changeset{data: %Slide{}}

  """
  def change_slide(%Slide{} = slide, attrs \\ %{}) do
    Slide.changeset(slide, attrs)
  end
end
