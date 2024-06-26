import { create } from "zustand";
import pb from "./pb";
import type { Patient } from "./dashboard";

type PatientStore = {
	patients: Patient[];
	totalPatients: number;
	fetchPatients: (page?: number, perPage?: number) => Promise<void>;
	createPatient: (patient: Patient) => Promise<void>;
};

export const usePatients = create<PatientStore>((set) => ({
	patients: [],
	totalPatients: 10,
	fetchPatients: async (page = 1, perPage = 10) => {
		const patientList = await pb
			.collection("patients")
			.getList<Patient>(page, perPage, { order: "-created" });

		set({
			patients: patientList?.items || [],
			totalPatients: patientList?.totalItems || 0,
		});
	},
	createPatient: async (patient) =>
		set({ patients: await pb.collection("patients").create(patient) }),
}));

type ICU = {
  count: number;
  fetchICU: () => Promise<void>;
};

export const useICU = create<ICU>((set) => ({
	count: 0,
	fetchICU: async () => {
		const { icucount } = await pb
			.collection("icu_count")
			.getFirstListItem("icucount>0");

		set({ count: icucount });
	},
}));
