import { readFile, writeFile } from "fs/promises";
import { existsSync } from "fs";

export const HISTORY_FILE = "./history.json";

export const loadHistory = async () => {
  try {
    if (existsSync(HISTORY_FILE)) {
      const data = await readFile(HISTORY_FILE, "utf8");
      return JSON.parse(data);
    }
    return [];
  } catch (err) {
    console.log("Error loading history:", err.message);
    return [];
  }
};

export const saveHistory = async (history) => {
  try {
    await writeFile(HISTORY_FILE, JSON.stringify(history.slice(-50), null, 2));
  } catch (err) {
    console.error("Error saving history", err.message);
  }
};

export const addToHistory = (entry, history) => {
  history.unshift(entry);
};
