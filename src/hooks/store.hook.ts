import { AppDispatch, AppStore, RootState } from "@/stores";
import { useDispatch, useSelector, useStore } from "react-redux";

export const useStoreDispatch = useDispatch.withTypes<AppDispatch>();
export const useStoreSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
