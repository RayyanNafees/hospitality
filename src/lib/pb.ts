import Pocketbase from "pocketbase";
const pb = new Pocketbase(
	import.meta.env.DEV ? import.meta.env.VITE_PB_URL : undefined,
);

export default pb;
import useSWR from "swr";

export const usePB = <T>(col: string) =>
	useSWR([col], () =>  pb.collection(col).getFullList<T>());
