import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { characterModel, Result } from "shared/model/characterModel";

// 6 Character
const characterHomeUrl =
  "https://rickandmortyapi.com/api/character/2,4,6,8,10,12";

const characterHomeApi = async () =>
  (await axios.get<Result[]>(characterHomeUrl)).data;

export const useCharacterHomeApi = () => {
  return useQuery(["characterHomeApi"], characterHomeApi);
};

// All Character
const characterApiUrl = "https://rickandmortyapi.com/api/character";

const characterApi = async () =>
  (await axios.get<characterModel>(characterApiUrl)).data;

export const useCharacterApi = () => {
  return useQuery(["characterApi"], characterApi);
};
