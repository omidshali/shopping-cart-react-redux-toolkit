import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

export const useCartDispatch = useDispatch.withTypes<AppDispatch>();
export const useCartSelectore = useSelector.withTypes<RootState>();
