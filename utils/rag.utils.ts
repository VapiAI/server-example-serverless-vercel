export const queryDocuments = async (city: string): Promise<any> => {
  try {
    return {};
  } catch (error) {
    console.error("Error querying documents:", error);
    throw error;
  }
};
