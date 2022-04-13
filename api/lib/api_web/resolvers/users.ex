defmodule ApiWeb.Resolvers.Accounts do

  alias Api.Accounts.User
  alias Api.Accounts

  def list_users(_args, _context) do
    {:ok, Api.Accounts.list_users()}
  end

  def get_user(%{id: id}, _context) do
    {:ok, Api.Accounts.get_user!(id)}
  end

  def create_user(args, _context) do
    case Api.Accounts.create_user(args) do
      {:ok, %User{} = user} -> {:ok, user}
      {:error, changeset} -> {:error, inspect(changeset.errors)}
    end
  end

  def update_user(%{id: id} = params, _context) do
    case Api.Accounts.get_user!(id) do
      nil ->
        {:error, "Product not found"}

      %User{} = user ->
        case Api.Accounts.update_user(user, params) do
          {:ok, %User{} = user} -> {:ok, user}
          {:error, changeset} -> {:error, inspect(changeset.errors)}
        end
    end
  end

  def delete_user(%{id: id}, _context) do
    case Api.Accounts.get_user!(id) do
      nil -> {:error, "User not found"}
      %User{} = user -> Api.Accounts.delete_user(user)
    end
  end

end
