export type LeadRole = "user" | "instructor";

export type LeadInput = {
  name: string;
  email: string;
  role: LeadRole;
  note?: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateLeadInput(input: Partial<LeadInput>) {
  if (!input.name || input.name.trim().length < 2) {
    return "Please enter your full name.";
  }

  if (!input.email || !emailRegex.test(input.email)) {
    return "Please provide a valid email address.";
  }

  if (input.role !== "user" && input.role !== "instructor") {
    return "Please select a valid role.";
  }

  if (input.note && input.note.length > 500) {
    return "Keep your message under 500 characters.";
  }

  return null;
}
