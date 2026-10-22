import { useEffect, useMemo, useState } from "react";
import "./App.css";

const skillData = {
  Technology: [
    "Web Development",
    "App Development",
    "AI & ML",
    "Data Science",
    "Cybersecurity",
    "Cloud Computing",
    "Blockchain",
    "DevOps",
    "QA & Testing",
  ],
  Business: [
    "Business Strategy",
    "Product Management",
    "Operations",
    "Sales",
    "Business Development",
    "Marketing",
    "Customer Research",
    "Consulting",
  ],
  Finance: [
    "Investment",
    "Accounting",
    "FinTech",
    "Financial Analysis",
    "Corporate Finance",
    "Financial Planning",
  ],
  Design: [
    "UI/UX Design",
    "Product Design",
    "Graphic Design",
    "Branding",
    "Illustration",
    "Motion Design",
    "Video Editing",
  ],
  "Fashion & Beauty": [
    "Fashion Design",
    "Styling",
    "Merchandising",
    "Textile Design",
    "Beauty & Cosmetics",
    "Fashion Marketing",
    "Personal Branding",
  ],
  "Media & Content": [
    "Content Writing",
    "Social Media",
    "Photography",
    "Videography",
    "Copywriting",
    "PR & Communications",
    "Podcasting",
  ],
  Healthcare: [
    "Medicine",
    "Biotechnology",
    "Healthcare Research",
    "Mental Health",
    "Public Health",
    "Pharma",
    "Nutrition",
  ],
  "Science & Research": [
    "Life Sciences",
    "Chemistry",
    "Physics",
    "Research",
    "Scientific Writing",
    "Lab Skills",
  ],
  Engineering: [
    "Mechanical",
    "Electrical",
    "Civil",
    "Electronics",
    "Manufacturing",
    "3D Modelling",
  ],
  Education: [
    "Teaching",
    "EdTech",
    "Curriculum Design",
    "Educational Research",
    "Instructional Design",
    "Mentoring",
  ],
  "Law & Policy": [
    "Legal Research",
    "Corporate Law",
    "Policy",
    "Compliance",
    "Public Policy",
    "Legal Operations",
  ],
  "Architecture & Real Estate": [
    "Architecture",
    "Interior Design",
    "Urban Planning",
    "Real Estate",
    "Construction",
  ],
  "Food & Hospitality": [
    "Food Business",
    "Culinary",
    "Hospitality",
    "Restaurant Operations",
    "Food Technology",
  ],
  "Agriculture & Environment": [
    "Agriculture",
    "AgriTech",
    "Sustainability",
    "Climate",
    "Environmental Research",
  ],
  "Arts & Culture": [
    "Fine Arts",
    "Music",
    "Performing Arts",
    "Cultural Research",
    "Creative Direction",
  ],
  "Sports & Wellness": [
    "Sports",
    "Fitness",
    "Wellness",
    "Sports Management",
    "Health Coaching",
  ],
  "Social Impact": [
    "NGO Management",
    "Community Building",
    "Social Entrepreneurship",
    "Fundraising",
    "Impact Research",
  ],
};

const interestGroups = {
  "Business & Innovation": [
    "Entrepreneurship",
    "Startups",
    "Business",
    "Marketing",
    "Finance",
    "E-commerce",
  ],
  "Technology & Science": [
    "Technology",
    "AI & ML",
    "Research",
    "Science",
    "Space",
    "Robotics",
  ],
  "Creative & Culture": [
    "Design",
    "Fashion",
    "Beauty",
    "Arts & Culture",
    "Music",
    "Film & Entertainment",
  ],
  "Health & Lifestyle": [
    "Healthcare",
    "Mental Wellness",
    "Fitness",
    "Sports",
    "Nutrition",
    "Travel & Lifestyle",
  ],
  "Society & Impact": [
    "Education",
    "Social Impact",
    "Sustainability",
    "Climate",
    "Agriculture",
    "Community Building",
  ],
};

const DEMO_PROFILES = [
  ["Kunal Shah", "E-commerce Founder", "Business", "E-commerce", "Startups", "Startup Interest"],
  ["Aisha Desai", "Marketing Lead", "Business", "Marketing", "Startups", "Startup Interest"],
  ["Manav Patel", "Space Researcher", "Science & Research", "Research", "Space", "Investment Interest"],
  ["Ira Shah", "Community Builder", "Social Impact", "Community Building", "Social Impact", "Passionate Interest"],
  ["Veer Mehta", "Film Producer", "Media & Content", "Videography", "Film & Entertainment", "Startup Interest"],
  ["Mahi Patel", "Mental Wellness Coach", "Healthcare", "Mental Health", "Mental Wellness", "Passionate Interest"],
  ["Yash Shah", "Sports Entrepreneur", "Sports & Wellness", "Sports Management", "Sports", "Startup Interest"],
  ["Avni Mehta", "Beauty Founder", "Fashion & Beauty", "Beauty & Cosmetics", "Beauty", "Startup Interest"],
  ["Dhruv Patel", "Climate Researcher", "Agriculture & Environment", "Climate", "Climate", "Investment Interest"],
  ["Sara Shah", "Music Producer", "Arts & Culture", "Music", "Music", "Passionate Interest"],
  ["Kavya Patel", "Nutrition Coach", "Healthcare", "Nutrition", "Nutrition", "Passionate Interest"],
  ["Arjun Shah", "Sustainability Founder", "Agriculture & Environment", "Sustainability", "Sustainability", "Startup Interest"],
  ["Naman Mehta", "Research Fellow", "Science & Research", "Scientific Writing", "Research", "Investment Interest"],
  ["Riya Shah", "Travel Creator", "Media & Content", "Photography", "Travel & Lifestyle", "Startup Interest"],
];

function createDemoProfiles() {
  return DEMO_PROFILES.map((item, index) => ({
    _id: `demo-profile-${index + 1}`,
    id: `demo-profile-${index + 1}`,
    userId: `demo-user-${index + 1}`,
    firstName: item[0].split(" ")[0],
    lastName: item[0].split(" ").slice(1).join(" "),
    email: `demo${index + 1}@teammatch.demo`,
    location: "Surat",
    education: "Graduated",
    professionalRole: item[1],
    industry: item[2],
    skills: [item[2]],
    subskills: [item[3]],
    interests: [item[4]],
    about: `I'm exploring ${item[4]} and looking to learn, build and collaborate with people who share similar goals.`,
    focusType: item[5],
    focusDescription:
      item[5] === "Startup Interest"
        ? `Looking to build and explore opportunities around ${item[4]}.`
        : item[5] === "Investment Interest"
        ? `Interested in discovering promising ideas and people working in ${item[4]}.`
        : `Passionate about ${item[4]} and open to meaningful collaborations.`,
    partnershipGender: "Everyone",
    photos: [],
    isDemo: true,
  }));
}


const people = [
  {
    name: "Priya Sharma",
    role: "Medical Student",
    field: "Healthcare",
    skills: ["Healthcare", "Research", "Leadership"],
    looking: "Technical Co-founder",
    match: 94,
    initial: "P",
  },
  {
    name: "Rahul Mehta",
    role: "Software Developer",
    field: "Technology",
    skills: ["Web Development", "AI & ML", "Product"],
    looking: "Business Partner",
    match: 91,
    initial: "R",
  },
  {
    name: "Ananya Patel",
    role: "Business Student",
    field: "Business",
    skills: ["Marketing", "Finance", "Strategy"],
    looking: "Technical Co-founder",
    match: 87,
    initial: "A",
  },
];

function calculateAge(birthday) {
  if (!birthday) return "";

  const today = new Date();
  const birthDate = new Date(`${birthday}T00:00:00`);

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age >= 0 ? age : "";
}


const PROFILE_STORAGE_KEY = "teammatch_profile";
const PROFILES_STORAGE_KEY = "teammatch_profiles";
const ACTIVE_PROFILE_ID_KEY = "teammatch_active_profile_id";
const PROFILE_CREATED_KEY = "teammatch_profile_created";
const API_BASE_URL = "http://localhost:5001";

const emptyProfile = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  birthday: "",
  gender: "",
  location: "",
  education: "",
  professionalRole: "",
  industry: "",
  skills: [],
  subskills: [],
  otherSkill: "",
  interests: [],
  otherInterest: "",
  about: "",
  focusType: "",
  focusDescription: "",
  prompts: [],
  promptQuestion: "",
  promptAnswer: "",
  partnershipGender: "",
  photos: [],
};

function createProfileId() {
  return `profile_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

function normalizeProfile(parsed = {}) {
  return {
    ...emptyProfile,
    ...parsed,
    id: parsed.id || createProfileId(),
    skills: Array.isArray(parsed.skills) ? parsed.skills : [],
    subskills: Array.isArray(parsed.subskills) ? parsed.subskills : [],
    interests: Array.isArray(parsed.interests) ? parsed.interests : [],
    prompts: Array.isArray(parsed.prompts) ? parsed.prompts : [],
    photos: Array.isArray(parsed.photos) ? parsed.photos : [],
  };
}

function loadSavedProfiles() {
  try {
    const storedProfiles = localStorage.getItem(PROFILES_STORAGE_KEY);

    if (storedProfiles) {
      const parsedProfiles = JSON.parse(storedProfiles);

      if (Array.isArray(parsedProfiles)) {
        return parsedProfiles.map(normalizeProfile);
      }
    }

    const legacyProfile = localStorage.getItem(PROFILE_STORAGE_KEY);

    if (legacyProfile) {
      const migratedProfile = normalizeProfile(JSON.parse(legacyProfile));

      localStorage.setItem(
        PROFILES_STORAGE_KEY,
        JSON.stringify([migratedProfile])
      );
      localStorage.setItem(
        ACTIVE_PROFILE_ID_KEY,
        migratedProfile.id
      );
      localStorage.setItem(PROFILE_CREATED_KEY, "true");

      return [migratedProfile];
    }

    return [];
  } catch (error) {
    console.error("Could not load TeamMatch profiles.", error);
    return [];
  }
}

function getActiveProfileId(profiles) {
  try {
    const savedId = localStorage.getItem(ACTIVE_PROFILE_ID_KEY);

    if (savedId && profiles.some((profile) => profile.id === savedId)) {
      return savedId;
    }
  } catch (error) {
    console.warn("Could not read active TeamMatch profile.", error);
  }

  return profiles[0]?.id || null;
}

function saveProfiles(profiles) {
  try {
    localStorage.setItem(
      PROFILES_STORAGE_KEY,
      JSON.stringify(profiles)
    );

    if (profiles.length > 0) {
      localStorage.setItem(PROFILE_CREATED_KEY, "true");
    } else {
      localStorage.removeItem(PROFILE_CREATED_KEY);
    }

    return true;
  } catch (error) {
    console.error("Could not save TeamMatch profiles.", error);
    return false;
  }
}

function saveProfile(profileToSave) {
  try {
    localStorage.setItem(
      PROFILE_STORAGE_KEY,
      JSON.stringify(profileToSave)
    );
    localStorage.setItem(
      ACTIVE_PROFILE_ID_KEY,
      profileToSave.id
    );
    localStorage.setItem(PROFILE_CREATED_KEY, "true");
    return true;
  } catch (error) {
    console.error("Could not save TeamMatch profile.", error);
    return false;
  }
}

function getAuthToken() {
  try {
    return localStorage.getItem("teammatch_token");
  } catch {
    return null;
  }
}

async function apiRequest(endpoint, options = {}) {
  const token = getAuthToken();

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {}),
    },
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(
      data.message ||
      data.error ||
      `Request failed (${response.status})`
    );
  }

  return data;
}

async function saveProfileToBackend(profileToSave) {
  const token = getAuthToken();

  if (!token) {
    console.warn("No authentication token. Profile saved locally.");
    return profileToSave;
  }

  return apiRequest("/api/profiles", {
    method: "POST",
    body: JSON.stringify(profileToSave),
  });
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const image = new Image();
      image.onload = () => {
        const maxSize = 900;
        const scale = Math.min(
          1,
          maxSize / image.width,
          maxSize / image.height
        );

        const canvas = document.createElement("canvas");
        canvas.width = Math.max(1, Math.round(image.width * scale));
        canvas.height = Math.max(1, Math.round(image.height * scale));

        const context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, canvas.width, canvas.height);

        resolve(canvas.toDataURL("image/jpeg", 0.8));
      };

      image.onerror = reject;
      image.src = reader.result;
    };

    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function App() {
  const [page, setPage] = useState("home");
  const [step, setStep] = useState(1);
  const [openSkillCategory, setOpenSkillCategory] = useState(null);
  const [showOtherSkills, setShowOtherSkills] = useState(false);
  const [openInterestGroup, setOpenInterestGroup] = useState(null);

  const [initialProfiles] = useState(() => loadSavedProfiles());
  const [profiles, setProfiles] = useState(initialProfiles);
  const [activeProfileId, setActiveProfileId] = useState(() =>
    getActiveProfileId(initialProfiles)
  );
  const [profile, setProfile] = useState(() => {
    const activeId = getActiveProfileId(initialProfiles);

    return (
      initialProfiles.find((savedProfile) => savedProfile.id === activeId) ||
      normalizeProfile(emptyProfile)
    );
  });
  const [profileSaved, setProfileSaved] = useState(
    initialProfiles.length > 0
  );
  const [isCreatingProfile, setIsCreatingProfile] = useState(false);
  const [backendSaving, setBackendSaving] = useState(false);
  const [backendConnected, setBackendConnected] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const [authEmail, setAuthEmail] = useState("");
  const [authPassword, setAuthPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [authLoading, setAuthLoading] = useState(false);
  const [authReturnPage, setAuthReturnPage] = useState("profile");

  // Load the signed-in user's profile from MongoDB when the app starts.
  useEffect(() => {
    const token = getAuthToken();
    if (!token) return;

    apiRequest("/api/profiles/me")
      .then((data) => {
        const serverProfile = data?.profile || data;
        if (!serverProfile || !serverProfile._id && !serverProfile.id) return;

        const mergedProfile = normalizeProfile({
          ...profile,
          ...serverProfile,
          id: profile.id || serverProfile._id || serverProfile.id,
        });

        setProfile(mergedProfile);
        setProfileSaved(true);
        setBackendConnected(true);

        setProfiles([mergedProfile]);
saveProfiles([mergedProfile]);

        saveProfile(mergedProfile);
      })
      .catch((error) => {
        console.warn(
          "Could not load signed-in profile from backend.",
          error.message
        );
      });
  }, []);

  useEffect(() => {
    if (!profileSaved || !activeProfileId || isCreatingProfile) return;

    setProfiles((currentProfiles) => {
      const nextProfiles = currentProfiles.map((savedProfile) =>
        savedProfile.id === activeProfileId ? profile : savedProfile
      );

      saveProfiles(nextProfiles);
      return nextProfiles;
    });

    saveProfile(profile);
  }, [profile, profileSaved, activeProfileId, isCreatingProfile]);

  const calculatedAge = calculateAge(profile.birthday);

  // The first interest the user selected is shown as their featured
  // passionate interest on the profile. No extra selector is needed.
  const featuredPassion =
    profile.interests.find((item) => item !== "Other") ||
    profile.otherInterest ||
    "";

  const update = (key, value) => {
    setProfile((current) => ({
      ...current,
      [key]: value,
    }));
  };

  const toggleArray = (key, value) => {
    setProfile((current) => ({
      ...current,
      [key]: current[key].includes(value)
        ? current[key].filter((item) => item !== value)
        : [...current[key], value],
    }));
  };

  const createNewProfile = () => {
    const newProfile = normalizeProfile({
      ...emptyProfile,
      id: createProfileId(),
    });

    setProfile(newProfile);
    setActiveProfileId(newProfile.id);
    setIsCreatingProfile(true);
    setPage("onboarding");
    setStep(1);
    setOpenSkillCategory(null);
    setShowOtherSkills(false);
    setOpenInterestGroup(null);

    try {
      localStorage.setItem(
        ACTIVE_PROFILE_ID_KEY,
        newProfile.id
      );
    } catch (error) {
      console.warn("Could not set active TeamMatch profile.", error);
    }
  };

  const openSavedProfile = (profileId) => {
    const savedProfile = profiles.find(
      (item) => item.id === profileId
    );

    if (!savedProfile) return;

    const selectedProfile = normalizeProfile(savedProfile);

    setProfile(selectedProfile);
    setActiveProfileId(selectedProfile.id);
    setProfileSaved(true);
    setIsCreatingProfile(false);
    setPage("profile");

    try {
      localStorage.setItem(
        ACTIVE_PROFILE_ID_KEY,
        selectedProfile.id
      );
      localStorage.setItem(
        PROFILE_STORAGE_KEY,
        JSON.stringify(selectedProfile)
      );
    } catch (error) {
      console.warn("Could not switch TeamMatch profile.", error);
    }
  };

  const requireAuth = (targetPage = "profile") => {
    if (getAuthToken()) {
      setPage(targetPage);
      return;
    }

    setAuthReturnPage(targetPage);
    setAuthMode("login");
    setAuthError("");
    setAuthPassword("");
    setAuthEmail(profile.email || "");
    setPage("auth");
  };

  const startProfile = () => {
    if (!getAuthToken()) {
      requireAuth("profile");
      return;
    }

    if (profileSaved && activeProfileId) {
      setIsCreatingProfile(false);
      setPage("profile");
      return;
    }

    createNewProfile();
  };

  const handleAuthSubmit = async (event) => {
    event.preventDefault();

    const email = authEmail.trim().toLowerCase();
    const password = authPassword;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setAuthError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setAuthError("Password must be at least 6 characters.");
      return;
    }

    setAuthLoading(true);
    setAuthError("");

    try {
      const endpoint = authMode === "register"
        ? "/api/auth/register"
        : "/api/auth/login";

      const data = await apiRequest(endpoint, {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      if (!data?.token) {
        throw new Error("Authentication succeeded but no token was returned.");
      }

      localStorage.setItem("teammatch_token", data.token);
      setBackendConnected(true);
      setAuthEmail(email);

      let serverProfile = null;

      try {
        const profileData = await apiRequest("/api/profiles/me");
        serverProfile = profileData?.profile || profileData;
      } catch (profileError) {
        // A newly registered account normally has no profile yet.
        if (authMode === "login") {
          console.warn("Could not load existing profile:", profileError.message);
        }
      }

      if (serverProfile && (serverProfile._id || serverProfile.id)) {
        const mergedProfile = normalizeProfile({
          ...profile,
          ...serverProfile,
          id: profile.id || serverProfile._id || serverProfile.id,
          email,
        });

        setProfile(mergedProfile);
        setProfileSaved(true);
        setIsCreatingProfile(false);
        setProfiles((currentProfiles) => {
          const nextProfiles = currentProfiles.some(
            (item) => item.id === mergedProfile.id
          )
            ? currentProfiles.map((item) =>
                item.id === mergedProfile.id ? mergedProfile : item
              )
            : [...currentProfiles, mergedProfile];
          saveProfiles(nextProfiles);
          return nextProfiles;
        });
        saveProfile(mergedProfile);
        setPage(authReturnPage === "discover" ? "discover" : "profile");
      } else {
        const localMatch = profiles.find(
          (item) => item.email?.trim().toLowerCase() === email
        );

        if (localMatch) {
          const selectedProfile = normalizeProfile({
            ...localMatch,
            email,
          });

          setProfile(selectedProfile);
          setActiveProfileId(selectedProfile.id);
          setProfileSaved(true);
          setIsCreatingProfile(false);

          // Migrate an existing local profile into this authenticated account.
          try {
            const savedProfile = await apiRequest("/api/profiles", {
              method: "POST",
              body: JSON.stringify(selectedProfile),
            });

            const finalProfile = normalizeProfile({
              ...selectedProfile,
              ...savedProfile,
              id: selectedProfile.id,
              email,
            });

            setProfile(finalProfile);
            saveProfile(finalProfile);
            setBackendConnected(true);
          } catch (migrationError) {
            console.warn(
              "Could not migrate the local profile to MongoDB.",
              migrationError.message
            );
          }

          setPage(authReturnPage === "discover" ? "discover" : "profile");
        } else {
          const newProfile = normalizeProfile({
            ...emptyProfile,
            email,
            id: createProfileId(),
          });
          setProfile(newProfile);
          setActiveProfileId(newProfile.id);
          setProfileSaved(false);
          setIsCreatingProfile(true);
          setStep(1);
          setPage("onboarding");
        }
      }

      setAuthPassword("");
    } catch (error) {
      setAuthError(error.message || "Something went wrong. Please try again.");
    } finally {
      setAuthLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("teammatch_token");
    localStorage.removeItem(ACTIVE_PROFILE_ID_KEY);
    localStorage.removeItem(PROFILE_STORAGE_KEY);

    setBackendConnected(false);
    setAuthPassword("");
    setAuthError("");
    setAuthEmail("");
    setAuthMode("login");
    setProfile(normalizeProfile(emptyProfile));
    setActiveProfileId(null);
    setProfileSaved(false);
    setIsCreatingProfile(false);
    setPage("home");
  };

  const stepComplete = useMemo(() => {
    switch (step) {
      case 1:
        return profile.firstName.trim() !== "";

      case 2:
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email);

      case 3:
        return Boolean(profile.birthday);

      case 4:
        return Boolean(profile.gender);

      case 5:
        return Boolean(profile.location);

      case 6:
        return Boolean(profile.education);

      case 7:
        return (
          profile.professionalRole.trim() !== "" &&
          Boolean(profile.industry)
        );

      case 8:
        return (
          profile.skills.length > 0 &&
          (
            profile.subskills.length > 0 ||
            profile.otherSkill.trim() !== ""
          )
        );

      case 9:
        return (
          profile.interests.length > 0 ||
          profile.otherInterest.trim() !== ""
        );

      case 10:
        return profile.about.trim().length >= 20;

      case 11:
        return (
          Boolean(profile.focusType) &&
          profile.focusDescription.trim().length >= 15
        );

      case 12:
        return (
          Array.isArray(profile.prompts) &&
          profile.prompts.length >= 2 &&
          profile.prompts[0]?.question &&
          profile.prompts[0]?.answer?.trim().length >= 10 &&
          profile.prompts[1]?.question &&
          profile.prompts[1]?.answer?.trim().length >= 10 &&
          profile.prompts[0]?.question !== profile.prompts[1]?.question
        );

      case 13:
        return true;

      case 14:
        return true;

      default:
        return true;
    }
  }, [step, profile]);

  const next = () => {
    if (!stepComplete) return;
    setStep((current) => Math.min(current + 1, 14));
  };

  const skipConnectionPreference = () => {
    update("partnershipGender", "");
    setStep(14);
  };

  const back = () => {
    // Onboarding: always go to the immediately previous step.
    if (page === "onboarding") {
      if (step === 1) {
        setPage("home");
      } else {
        setStep((current) => current - 1);
      }
      return;
    }

    // Profile was reached after completing onboarding.
    if (page === "profile") {
      setPage("onboarding");
      setStep(13);
      return;
    }

    // Discover is reached from the profile in the normal flow.
    if (page === "discover") {
      setPage("profile");
      return;
    }

    // Requests is reached from Discover.
    if (page === "requests") {
      setPage("discover");
      return;
    }

    // Feedback is reached from Discover.
    if (page === "feedback") {
      setPage("discover");
    }
  };

  const finishProfile = async () => {
    const token = getAuthToken();

    if (!token) {
      requireAuth("profile");
      return;
    }

    const profileToSave = normalizeProfile({
      ...profile,
      id: profile.id || createProfileId(),
      email: authEmail || profile.email,
    });

    const nextProfiles = [profileToSave];

    const locallySaved = saveProfiles(nextProfiles);

    if (locallySaved) {
      setProfiles(nextProfiles);
      setProfile(profileToSave);
      setActiveProfileId(profileToSave.id);
      setProfileSaved(true);
      saveProfile(profileToSave);
    }

    setBackendSaving(true);

    try {
      const savedProfile = await saveProfileToBackend(profileToSave);

      const finalProfile = normalizeProfile({
        ...profileToSave,
        ...savedProfile,
        id: profileToSave.id,
      });

      const finalProfiles = nextProfiles.map((savedProfileItem) =>
        savedProfileItem.id === finalProfile.id
          ? finalProfile
          : savedProfileItem
      );

      setProfile(finalProfile);
      setProfiles(finalProfiles);
      setActiveProfileId(finalProfile.id);
      setProfileSaved(true);
      setBackendConnected(true);

      saveProfiles(finalProfiles);
      saveProfile(finalProfile);

      console.log("Profile saved to MongoDB ✅");
    } catch (error) {
      setBackendConnected(false);
      console.error(
        "Backend save failed. Local profile was kept.",
        error.message
      );
    } finally {
      setBackendSaving(false);
      setIsCreatingProfile(false);
      setPage("profile");
    }
  };

  const removePhoto = (index) => {
    setProfile((current) => ({
      ...current,
      photos: current.photos.filter((_, i) => i !== index),
    }));
  };

  if (page === "auth") {
    return (
      <div
        className="app centered"
        style={{
          minHeight: "100vh",
          padding: "32px 20px",
          background: "#faf9f7",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "520px",
            background: "#fff",
            border: "1px solid rgba(31, 29, 26, 0.10)",
            borderRadius: "28px",
            padding: "42px",
            boxShadow: "0 24px 70px rgba(31, 29, 26, 0.10)",
          }}
        >
          <button
            className="brand"
            type="button"
            onClick={() => setPage("home")}
            style={{ marginBottom: "42px" }}
          >
            Team<span>Match</span>
          </button>

          <p className="eyebrow">YOUR TEAMMATCH ACCOUNT</p>
          <h1 style={{ marginBottom: "12px" }}>
            {authMode === "login" ? "Welcome back." : "Create your account."}
          </h1>
          <p className="screen-subtitle" style={{ marginBottom: "30px" }}>
            {authMode === "login"
              ? "Sign in to access your profile and discover teammates."
              : "One account keeps your profile and connections together."}
          </p>

          {authError && (
            <div
              role="alert"
              style={{
                padding: "14px 16px",
                borderRadius: "14px",
                marginBottom: "20px",
                background: "#fff3f0",
                border: "1px solid #f1c8bd",
                color: "#8a3325",
                fontSize: "14px",
              }}
            >
              {authError}
            </div>
          )}

          <form onSubmit={handleAuthSubmit}>
            <div className="field" style={{ marginBottom: "18px" }}>
              <label>Email</label>
              <input
                autoFocus
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={authEmail}
                onChange={(e) => setAuthEmail(e.target.value)}
              />
            </div>

            <div className="field" style={{ marginBottom: "24px" }}>
              <label>Password</label>
              <input
                type="password"
                autoComplete={authMode === "login" ? "current-password" : "new-password"}
                placeholder="At least 6 characters"
                value={authPassword}
                onChange={(e) => setAuthPassword(e.target.value)}
              />
            </div>

            <button
              className="button button-dark button-wide"
              type="submit"
              disabled={authLoading}
            >
              {authLoading
                ? "Please wait…"
                : authMode === "login"
                  ? "Sign in"
                  : "Create account"}
              {!authLoading && <span>→</span>}
            </button>
          </form>

          <div
            style={{
              marginTop: "24px",
              paddingTop: "24px",
              borderTop: "1px solid rgba(31, 29, 26, 0.08)",
              textAlign: "center",
            }}
          >
            <span style={{ color: "#777", fontSize: "14px" }}>
              {authMode === "login"
                ? "Don't have an account?"
                : "Already have an account?"}
            </span>{" "}
            <button
              type="button"
              onClick={() => {
                setAuthMode(authMode === "login" ? "register" : "login");
                setAuthError("");
              }}
              style={{
                border: 0,
                background: "transparent",
                padding: 0,
                font: "inherit",
                fontWeight: 700,
                cursor: "pointer",
                color: "#1f1d1a",
              }}
            >
              {authMode === "login" ? "Create one" : "Sign in"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (page === "home") {
    return (
      <div className="app home-page">
        <header className="navbar">
          <button
            className="brand"
            type="button"
            onClick={() => setPage("home")}
          >
            Team<span>Match</span>
          </button>

          <div className="nav-actions">
            <button
              className="nav-link"
              type="button"
              onClick={() => requireAuth("discover")}
            >
              Explore
            </button>

            <button
              className="nav-outline"
              type="button"
              onClick={startProfile}
            >
              {profileSaved ? "My profile" : "Get started"}
            </button>

            <button
  className="nav-link"
  type="button"
  onClick={logout}
>
  Log out
</button>
          </div>
                </header>
                <nav className="mobile-nav">
  <button type="button" onClick={() => setPage("discover")}>
    <span>⌂</span>
    Explore
  </button>

  <button type="button" onClick={() => setPage("requests")}>
    <span>♡</span>
    Requests
  </button>

  <button type="button" onClick={() => setPage("chat")}>
    <span>◌</span>
    Chat
  </button>

  <button type="button" onClick={() => setPage("profile")}>
    <span>●</span>
    Profile
  </button>
</nav>

        <nav className="mobile-nav">
          <button type="button" onClick={() => requireAuth("discover")}>
            <span>⌂</span>
            Explore
          </button>

          <button type="button" onClick={() => requireAuth("requests")}>
            <span>♡</span>
            Requests
          </button>

          <button type="button" onClick={() => requireAuth("chat")}>
            <span>◌</span>
            Chat
          </button>

          <button type="button" onClick={startProfile}>
            <span>●</span>
            Profile
          </button>
        </nav>

        <main className="hero">
          <section className="hero-copy">
            <div className="eyebrow-row">
              <span className="eyebrow-dot" />
              <p className="eyebrow">
                A smarter way to find your people
              </p>
            </div>

            <h1>
              Build something
              <span> worth building.</span>
            </h1>

            <p className="hero-sub">
              TeamMatch helps students, graduates and aspiring founders
              find teammates who complement their skills, interests and
              ambitions.
            </p>

            <div className="hero-actions">
              <button
                className="button button-dark"
                type="button"
                onClick={startProfile}
              >
                {profileSaved ? "View my profile" : "Create your profile"}{" "}
                <span>→</span>
              </button>

              <button
                className="button button-light"
                type="button"
                onClick={() => requireAuth("discover")}
              >
                Explore teammates
              </button>
            </div>

            <div className="hero-proof">
              <div className="proof-avatars">
                <span>R</span>
                <span>P</span>
                <span>A</span>
                <span>+</span>
              </div>

              <div>
                <strong>Built for complementary teams</strong>
                <small>Skills • interests • startup goals</small>
              </div>
            </div>
          </section>

          <section className="hero-visual" aria-label="TeamMatch match preview">
            <div className="orbit-card orbit-card-back" />

            <div className="match-card">
              <div className="match-card-head">
                <div>
                  <span className="mini-label">
                    Recommended for you
                  </span>
                  <strong>94% fit</strong>
                </div>

                <span className="spark">✦</span>
              </div>

              <div className="match-profile">
                <div className="avatar avatar-large">P</div>

                <div>
                  <h3>Priya Sharma</h3>
                  <p>Medical Student · Healthcare</p>
                </div>
              </div>

              <div className="match-tags">
                <span>Healthcare</span>
                <span>Research</span>
                <span>Leadership</span>
              </div>

              <div className="match-divider" />

              <div className="match-meta">
                <div>
                  <span>Looking for</span>
                  <strong>Technical Co-founder</strong>
                </div>

                <div className="match-badge">
                  Strong match
                </div>
              </div>
            </div>

            <div className="floating-note note-top">
              <span>01</span>
              <strong>Skills</strong>
              <small>Complementary</small>
            </div>

            <div className="floating-note note-bottom">
              <span>02</span>
              <strong>Goals</strong>
              <small>Aligned</small>
            </div>
          </section>
        </main>

        <section className="home-strip">
          <div>
            <span>01</span>
            <strong>Tell us what you bring</strong>
            <small>Skills, interests and experience</small>
          </div>

          <div>
            <span>02</span>
            <strong>Discover better matches</strong>
            <small>Meet people with complementary strengths</small>
          </div>

          <div>
            <span>03</span>
            <strong>Build together</strong>
            <small>Connect, meet and create something real</small>
          </div>
        </section>
      </div>
    );
  }

  if (page === "onboarding") {
    return (
      <div className="app onboarding-page">
        <div className="onboarding-shell">
          <aside className="onboarding-aside">
            <button
              className="brand brand-aside"
              type="button"
              onClick={() => setPage("home")}
            >
              Team<span>Match</span>
            </button>

            <div className="aside-content">
              <p className="aside-kicker">CREATE YOUR PROFILE</p>

              <h2>
                Good teams start with knowing
                what makes you different.
              </h2>

              <p>
                A few quick questions help us understand your strengths
                and create more useful recommendations.
              </p>
            </div>

            <div className="aside-footer">
              <div className="aside-check">✓</div>

              <div>
                <strong>Your profile stays in your control.</strong>
                <small>You decide what you share.</small>
              </div>
            </div>
          </aside>

          <main className="onboarding-main">
            <div className="onboarding-topbar">
              <button className="back-btn" type="button" onClick={back}>
                ← Back
              </button>

              <div className="step-count">
                <span>Step</span>
                <strong>{String(step).padStart(2, "0")}</strong>
                <span>of 13</span>
              </div>
            </div>

            <div className="progress-track">
              <div style={{ width: `${(step / 13) * 100}%` }} />
            </div>

            <div className="onboarding-content">
              {step === 1 && (
                <Screen
                  kicker="01 · BASICS"
                  title="What should we call you?"
                  subtitle="Use the name you'd like teammates to see."
                >
                  <div className="field-grid">
                    <Field label="First name">
                      <input
                        autoFocus
                        placeholder="Ayushi"
                        value={profile.firstName}
                        onChange={(e) =>
                          update("firstName", e.target.value)
                        }
                      />
                    </Field>

                    <Field label="Last name">
                      <input
                        placeholder="Savaliya"
                        value={profile.lastName}
                        onChange={(e) =>
                          update("lastName", e.target.value)
                        }
                      />
                    </Field>
                  </div>
                </Screen>
              )}

              {step === 2 && (
                <Screen
                  kicker="02 · ACCOUNT"
                  title="What's your email?"
                  subtitle="We'll use it to keep your account secure and contact you about connections."
                >
                  <Field label="Email address">
                    <input
                      autoFocus
                      type="email"
                      placeholder="you@example.com"
                      value={profile.email}
                      onChange={(e) => update("email", e.target.value)}
                    />
                  </Field>
                </Screen>
              )}

              {step === 3 && (
                <Screen
                  kicker="03 · ABOUT YOU"
                  title="When were you born?"
                  subtitle="Only your age is shown publicly — your exact date stays private."
                >
                  <Field label="Date of birth">
                    <input
                      autoFocus
                      className="large-input"
                      type="date"
                      value={profile.birthday}
                      onChange={(e) =>
                        update("birthday", e.target.value)
                      }
                    />
                  </Field>

                  {calculatedAge !== "" && (
                    <div className="inline-info">
                      <span className="info-icon">✓</span>

                      <div>
                        <strong>Age calculated automatically</strong>
                        <span>
                          Your profile will show {calculatedAge} years old.
                        </span>
                      </div>
                    </div>
                  )}
                </Screen>
              )}

              {step === 4 && (
                <Screen
                  kicker="04 · ABOUT YOU"
                  title="How do you identify?"
                  subtitle="Choose the option that feels most comfortable for you."
                >
                  <ChoiceGrid
                    items={[
                      "Woman",
                      "Man",
                      "Non-binary",
                      "Other",
                    ]}
                    value={profile.gender}
                    onChange={(item) => update("gender", item)}
                  />
                </Screen>
              )}

              {step === 5 && (
                <Screen
                  kicker="05 · LOCATION"
                  title="Where are you based?"
                  subtitle="We'll use your city to make nearby connections easier to discover."
                >
                  <Field label="Current city">
                    <select
                      value={profile.location}
                      onChange={(e) =>
                        update("location", e.target.value)
                      }
                    >
                      <option value="">Select your city</option>
                      <option>Ahmedabad</option>
                      <option>Surat</option>
                      <option>Mumbai</option>
                      <option>Bangalore</option>
                      <option>Delhi</option>
                      <option>Pune</option>
                      <option>Hyderabad</option>
                      <option>Other</option>
                    </select>
                  </Field>
                </Screen>
              )}

              {step === 6 && (
                <Screen
                  kicker="06 · EDUCATION"
                  title="What's your current education?"
                  subtitle="This helps people understand your background at a glance."
                >
                  <Field label="Education level">
                    <select
                      value={profile.education}
                      onChange={(e) =>
                        update("education", e.target.value)
                      }
                    >
                      <option value="">Select education level</option>
                      <option>Undergraduate</option>
                      <option>Graduated</option>
                      <option>Post-graduated</option>
                      <option>Ongoing Post-graduate</option>
                    </select>
                  </Field>
                </Screen>
              )}

              {step === 7 && (
                <Screen
                  kicker="07 · BACKGROUND"
                  title="Tell us what you do."
                  subtitle="Keep it simple. Your skills and interests will give us the rest."
                >
                  

                    <Field label="Main industry / area">
                      <select
                        value={profile.industry}
                        onChange={(e) =>
                          update("industry", e.target.value)
                        }
                      >
                        <option value="">
                          Select your main area
                        </option>

                        {Object.keys(skillData).map((area) => (
                          <option key={area} value={area}>
                            {area}
                          </option>
                        ))}

                        <option>Other</option>
                      </select>
                    </Field>

                    <div className="professional-fields">
                    <Field label="Current role / field">
                      <input
                        autoFocus
                        placeholder="e.g. CSE student, fashion designer, founder..."
                        value={profile.professionalRole}
                        onChange={(e) =>
                          update("professionalRole", e.target.value)
                        }
                      />
                    </Field>

                  </div>
                </Screen>
              )}

              {step === 8 && (
                <Screen
                  kicker="08 · STRENGTHS"
                  title="What are your skills?"
                  subtitle="Choose a category first. You’ll only see its specific skills when you open it."
                >
                  {(() => {
                    const mainSkillCategories = [
                      "Technology",
                      "Business",
                      "Finance",
                      "Design",
                      "Fashion & Beauty",
                      "Media & Content",
                      "Healthcare",
                      "Science & Research",
                    ];

                    const otherSkillCategories = [
                      "Engineering",
                      "Education",
                      "Law & Policy",
                      "Architecture & Real Estate",
                      "Food & Hospitality",
                      "Agriculture & Environment",
                      "Arts & Culture",
                      "Sports & Wellness",
                    ];

                    const renderCategory = (category) => {
                      const selected = profile.skills.includes(category);
                      const open = openSkillCategory === category;

                      return (
                        <div
                          key={category}
                          className={
                            selected
                              ? "skill-category selected"
                              : "skill-category"
                          }
                        >
                          <button
                            type="button"
                            className="skill-category-header"
                            onClick={() => {
                              toggleArray("skills", category);
                              setOpenSkillCategory(
                                open ? null : category
                              );
                            }}
                          >
                            <span>{category}</span>
                            <span className="skill-category-check">
                              {selected ? "✓" : "+"}
                            </span>
                          </button>

                          {selected && open && (
                            <div className="skill-options">
                              {skillData[category].map((subskill) => (
                                <button
                                  type="button"
                                  key={subskill}
                                  className={
                                    profile.subskills.includes(subskill)
                                      ? "subskill active"
                                      : "subskill"
                                  }
                                  onClick={() =>
                                    toggleArray(
                                      "subskills",
                                      subskill
                                    )
                                  }
                                >
                                  {subskill}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    };

                    return (
                      <div className="skill-area-selector">
                        <div className="skill-category-grid">
                          {mainSkillCategories.map(renderCategory)}
                        </div>

                        <button
                          type="button"
                          className={
                            "skill-other-toggle" +
                            (showOtherSkills ? " active" : "")
                          }
                          onClick={() => {
                            setShowOtherSkills(!showOtherSkills);
                            setOpenSkillCategory(null);
                          }}
                        >
                          <span>
                            <strong>Other</strong>
                            <small>Explore more fields</small>
                          </span>
                          <span className="other-toggle-icon">
                            {showOtherSkills ? "−" : "+"}
                          </span>
                        </button>

                        {showOtherSkills && (
                          <div className="other-skill-panel">
                            <div className="other-panel-heading">
                              <div>
                                <strong>More areas</strong>
                                <span>
                                  Choose from these additional fields.
                                </span>
                              </div>
                            </div>

                            <div className="skill-category-grid">
                              {otherSkillCategories.map(renderCategory)}
                            </div>
                          </div>
                        )}

                        {profile.skills.includes("Other") && (
                          <div className="other-custom-box">
                            <Field label="Add a skill not listed above">
                              <input
                                placeholder="e.g. Jewellery design, event planning, dance..."
                                value={profile.otherSkill}
                                onChange={(e) =>
                                  update("otherSkill", e.target.value)
                                }
                              />
                            </Field>
                          </div>
                        )}

                        <button
                          type="button"
                          className={
                            profile.skills.includes("Other")
                              ? "custom-skill-trigger active"
                              : "custom-skill-trigger"
                          }
                          onClick={() => {
                            toggleArray("skills", "Other");
                            setShowOtherSkills(true);
                          }}
                        >
                          <span>Can’t find your skill?</span>
                          <strong>Add your own →</strong>
                        </button>

                        {(
                          profile.subskills.length > 0 ||
                          profile.otherSkill.trim() !== ""
                        ) && (
                          <div className="selected-skills-summary">
                            <div>
                              <strong>
                                {profile.subskills.length +
                                  (profile.otherSkill.trim() ? 1 : 0)}{" "}
                                skills selected
                              </strong>
                              <span>
                                You can change these anytime.
                              </span>
                            </div>

                            <div className="selected-skill-tags">
                              {profile.subskills.map((skill) => (
                                <span key={skill}>{skill}</span>
                              ))}

                              {profile.otherSkill.trim() && (
                                <span>{profile.otherSkill}</span>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })()}
                </Screen>
              )}

              {step === 9 && (
  <Screen
    kicker="09 · INTERESTS"
    title="What are you curious about?"
    subtitle="Choose the topics you'd genuinely enjoy exploring, discussing or building around."
  >
    {/* FIRST 8 INTERESTS */}
    <div className="interest-option-grid">
      {[
        "Technology",
        "Healthcare",
        "Finance",
        "Education",
        "AI & ML",
        "Marketing",
        "Design",
        "Entrepreneurship",
      ].map((interest) => (
        <button
          type="button"
          key={interest}
          className={
            profile.interests.includes(interest)
              ? "interest-option selected"
              : "interest-option"
          }
          onClick={() =>
            toggleArray("interests", interest)
          }
        >
          <span>{interest}</span>

          <span className="interest-check">
            {profile.interests.includes(interest)
              ? "✓"
              : ""}
          </span>
        </button>
      ))}
    </div>

    {/* OTHER BUTTON */}
    <button
      type="button"
      className={
        profile.interests.includes("Other")
          ? "other-interest-button active"
          : "other-interest-button"
      }
      onClick={() =>
        toggleArray("interests", "Other")
      }
    >
      <span>
        <strong>Other</strong>
        <small>See more interests</small>
      </span>

      <span className="other-arrow">
        {profile.interests.includes("Other")
          ? "⌃"
          : "⌄"}
      </span>
    </button>

    {/* ADDITIONAL 8 */}
    {profile.interests.includes("Other") && (
      <div className="more-interest-section">
        <div className="more-interest-heading">
          <div>
            <strong>More interests</strong>
            <span>
              Explore more areas
            </span>
          </div>
        </div>

        <div className="interest-option-grid">
          {[
            "Fashion",
            "Media & Content",
            "Science & Research",
            "Law & Policy",
            "Food & Hospitality",
            "Sports & Wellness",
            "Arts & Culture",
            "Travel & Lifestyle",
          ].map((interest) => (
            <button
              type="button"
              key={interest}
              className={
                profile.interests.includes(interest)
                  ? "interest-option selected"
                  : "interest-option"
              }
              onClick={() =>
                toggleArray(
                  "interests",
                  interest
                )
              }
            >
              <span>{interest}</span>

              <span className="interest-check">
                {profile.interests.includes(
                  interest
                )
                  ? "✓"
                  : ""}
              </span>
            </button>
          ))}
        </div>

        {/* CUSTOM OTHER INTEREST */}
        <div className="custom-interest-box">
          <Field label="Can't find your interest? Add your own">
            <input
              placeholder="e.g. Beauty, Gaming, Psychology, Jewellery..."
              value={profile.otherInterest || ""}
              onChange={(e) =>
                update(
                  "otherInterest",
                  e.target.value
                )
              }
            />
          </Field>
        </div>
      </div>
    )}

    {/* SELECTED SUMMARY */}
    {profile.interests.filter(
      (item) => item !== "Other"
    ).length > 0 && (
      <div className="selected-interest-summary">
        <strong>
          {profile.interests.filter(
            (item) => item !== "Other"
          ).length +
            (profile.otherInterest ? 1 : 0)}{" "}
          interests selected
        </strong>

        <div>
          {profile.interests
            .filter((item) => item !== "Other")
            .map((interest) => (
              <span key={interest}>
                {interest}
              </span>
            ))}

          {profile.otherInterest && (
            <span>
              {profile.otherInterest}
            </span>
          )}
        </div>
      </div>
    )}
  </Screen>
)}
              {step === 10 && (
                <Screen
                  kicker="10 · YOUR STORY"
                  title="Tell us a little about yourself."
                  subtitle="A good teammate profile feels human. Keep it clear, short and personal."
                >
                  <Field label="About you">
                    <textarea
                      autoFocus
                      rows="7"
                      maxLength="300"
                      placeholder="I'm a CSE student who enjoys building products, solving problems and learning from people in different fields..."
                      value={profile.about}
                      onChange={(e) =>
                        update("about", e.target.value)
                      }
                    />

                    <div className="field-footer">
                      <span>Minimum 20 characters</span>

                      <strong>
                        {profile.about.length}/300
                      </strong>
                    </div>
                  </Field>
                </Screen>
              )}

              {step === 11 && (
                <Screen
                  kicker="11 · DIRECTION"
                  title="What are you interested in?"
                  subtitle="Choose the direction that best describes what you want to explore."
                >
                  <div className="focus-grid">
                    {[
                      [
                        "Passionate Interest",
                        "A topic, cause or area you genuinely care about.",
                      ],
                      [
                        "Startup Interest",
                        "An idea, venture or product you want to explore.",
                      ],
                      [
                        "Investment Interest",
                        "Ideas or businesses you'd like to support.",
                      ],
                    ].map(([title, desc], index) => (
                      <button
                        type="button"
                        key={title}
                        className={
                          profile.focusType === title
                            ? "focus-card selected"
                            : "focus-card"
                        }
                        onClick={() =>
                          update("focusType", title)
                        }
                      >
                        <span className="focus-number">
                          0{index + 1}
                        </span>

                        <strong>{title}</strong>

                        <small>{desc}</small>
                      </button>
                    ))}
                  </div>

                  <Field label="Tell us more">
                    <textarea
                      rows="6"
                      placeholder="I'm especially interested in..."
                      value={profile.focusDescription}
                      onChange={(e) =>
                        update(
                          "focusDescription",
                          e.target.value
                        )
                      }
                    />

                    <div className="field-footer">
                      <span>Minimum 15 characters</span>
                    </div>
                  </Field>
                </Screen>
              )}

              {step === 12 && (
                <Screen
                  kicker="12 · YOUR PROMPTS"
                  title="Show people what you're about."
                  subtitle={`Choose at least 2 prompts for your ${profile.focusType || "selected"} profile and answer them in your own words.`}
                >
                  <div className="prompt-builder">
                    {(() => {
                      const promptBank = {
                        "Passionate Interest": [
                          "The thing I could talk about for hours is…",
                          "I’m currently obsessed with learning…",
                          "A cause or topic I genuinely care about…",
                          "Something I’d love to teach someone is…",
                          "The skill I want to get really good at is…",
                          "My ideal side quest would be…",
                        ],
                        "Startup Interest": [
                          "The startup idea I can’t stop thinking about is…",
                          "I’m looking for a teammate who can…",
                          "The problem I’d love to build a solution for is…",
                          "My biggest strength as a founder/teammate is…",
                          "The product I wish existed is…",
                          "If I had 30 days to build something, I’d build…",
                        ],
                        "Investment Interest": [
                          "The kind of startup I’d love to invest in is…",
                          "An industry I’m watching closely is…",
                          "What makes a startup interesting to me is…",
                          "The founder quality I value most is…",
                          "A problem I believe is worth backing is…",
                          "If I had to bet on one emerging space, it would be…",
                        ],
                      };

                      const prompts =
                        promptBank[profile.focusType] ||
                        promptBank["Passionate Interest"];

                      return [0, 1].map((index) => {
                        const current = profile.prompts?.[index] || {
                          question: "",
                          answer: "",
                        };

                        return (
                          <div className="prompt-card" key={index}>
                            <div className="prompt-card-header">
                              <span>Prompt {index + 1}</span>
                              {current.question && (
                                <span className="prompt-selected">✓ Selected</span>
                              )}
                            </div>

                            <label>
                              <span className="prompt-label">Choose a question</span>
                              <select
                                value={current.question}
                                onChange={(e) => {
                                  const nextPrompts = [...(profile.prompts || [])];
                                  nextPrompts[index] = {
                                    question: e.target.value,
                                    answer: current.answer,
                                  };
                                  update("prompts", nextPrompts);
                                }}
                              >
                                <option value="">Select a prompt…</option>
                                {prompts.map((question) => (
                                  <option
                                    key={question}
                                    value={question}
                                    disabled={prompts.some(
                                      (item, promptIndex) =>
                                        promptIndex !== index &&
                                        profile.prompts?.[promptIndex]?.question === item
                                    )}
                                  >
                                    {question}
                                  </option>
                                ))}
                              </select>
                            </label>

                            <label>
                              <span className="prompt-label">Your answer</span>
                              <textarea
                                rows="4"
                                maxLength="300"
                                placeholder="Write something that feels like you…"
                                value={current.answer}
                                onChange={(e) => {
                                  const nextPrompts = [...(profile.prompts || [])];
                                  nextPrompts[index] = {
                                    question: current.question,
                                    answer: e.target.value,
                                  };
                                  update("prompts", nextPrompts);
                                }}
                              />
                              <div className="field-footer">
                                <span>Minimum 10 characters</span>
                                <strong>{current.answer.length}/300</strong>
                              </div>
                            </label>
                          </div>
                        );
                      });
                    })()}

                    <div className="prompt-requirement">
                      <strong>2 prompts required</strong>
                      <span>Pick two different questions and answer both.</span>
                    </div>
                  </div>
                </Screen>
              )}

              {step === 13 && (
                <Screen
                  kicker="13 · CONNECTION PREFERENCE"
                  title="Do you have a connection preference?"
                  subtitle="Optional. You can choose a preference or skip this step completely."
                >
                  <div className="choice-grid">
                    {["Women", "Men", "Everyone"].map(
                      (item) => (
                        <Choice
                          key={item}
                          selected={
                            profile.partnershipGender ===
                            item
                          }
                          onClick={() =>
                            update(
                              "partnershipGender",
                              item
                            )
                          }
                        >
                          <span>{item}</span>
                        </Choice>
                      )
                    )}
                  </div>

                  <div className="skip-area">
                    <p>
                      No preference? That is completely fine.
                    </p>

                    <button
                      type="button"
                      className="skip-btn"
                      onClick={skipConnectionPreference}
                    >
                      Skip this step →
                    </button>
                  </div>
                </Screen>
              )}

                            {step === 14 && (
                <Screen
                  kicker="14 · PROFILE PHOTO"
                  title="Add two photos."
                  subtitle="A clear close-up and a half-body photo help teammates recognize you. You can skip this step for now."
                >
                  <div className="photo-upload-grid">
                    <div className="photo-upload-card">
                      <div className="photo-upload-top">
                        <div>
                          <span className="photo-number">01</span>
                          <h3>Close-up photo</h3>
                          <p>Face clearly visible</p>
                        </div>

                        {profile.photos?.some(
                          (photo) => photo.type === "closeup"
                        ) && (
                          <span className="photo-done">✓</span>
                        )}
                      </div>

                      <label className="photo-slot">
                        {profile.photos?.find(
                          (photo) => photo.type === "closeup"
                        ) ? (
                          <>
                            <img
                              src={
                                profile.photos.find(
                                  (photo) => photo.type === "closeup"
                                ).url
                              }
                              alt="Close-up preview"
                            />
                            <span className="photo-change-label">
                              Change photo
                            </span>
                          </>
                        ) : (
                          <>
                            <div className="photo-slot-icon">+</div>
                            <strong>Add close-up</strong>
                            <span>Clear face photo</span>
                          </>
                        )}

                        <input
                          type="file"
                          accept="image/*"
                          onChange={async (e) => {
                            const file = e.target.files?.[0];
                            if (!file) return;

                            try {
                              const dataUrl = await fileToDataUrl(file);
                              const newPhoto = {
                                name: file.name,
                                url: dataUrl,
                                type: "closeup",
                              };

                              const remaining = profile.photos.filter(
                                (photo) => photo.type !== "closeup"
                              );

                              update("photos", [...remaining, newPhoto]);
                            } catch (error) {
                              console.error("Could not load close-up photo.", error);
                            }

                            e.target.value = "";
                          }}
                        />
                      </label>
                    </div>

                    <div className="photo-upload-card">
                      <div className="photo-upload-top">
                        <div>
                          <span className="photo-number">02</span>
                          <h3>Half-body photo</h3>
                          <p>Upper body clearly visible</p>
                        </div>

                        {profile.photos?.some(
                          (photo) => photo.type === "halfbody"
                        ) && (
                          <span className="photo-done">✓</span>
                        )}
                      </div>

                      <label className="photo-slot">
                        {profile.photos?.find(
                          (photo) => photo.type === "halfbody"
                        ) ? (
                          <>
                            <img
                              src={
                                profile.photos.find(
                                  (photo) => photo.type === "halfbody"
                                ).url
                              }
                              alt="Half-body preview"
                            />
                            <span className="photo-change-label">
                              Change photo
                            </span>
                          </>
                        ) : (
                          <>
                            <div className="photo-slot-icon">+</div>
                            <strong>Add half-body</strong>
                            <span>Upper body visible</span>
                          </>
                        )}

                        <input
                          type="file"
                          accept="image/*"
                          onChange={async (e) => {
                            const file = e.target.files?.[0];
                            if (!file) return;

                            try {
                              const dataUrl = await fileToDataUrl(file);
                              const newPhoto = {
                                name: file.name,
                                url: dataUrl,
                                type: "halfbody",
                              };

                              const remaining = profile.photos.filter(
                                (photo) => photo.type !== "halfbody"
                              );

                              update("photos", [...remaining, newPhoto]);
                            } catch (error) {
                              console.error("Could not load half-body photo.", error);
                            }

                            e.target.value = "";
                          }}
                        />
                      </label>
                    </div>
                  </div>

                  <div className="photo-tip">
                    <strong>Tip:</strong> Use recent photos with good lighting.
                  </div>

                  <button
                    type="button"
                    className="skip-btn photo-skip"
                    onClick={finishProfile}
                  >
                    Skip photo and finish →
                  </button>
                </Screen>
              )}

              <div className="form-actions">
                {step < 14 ? (
                  <button
                    className="button button-dark button-wide"
                    type="button"
                    onClick={next}
                    disabled={!stepComplete}
                  >
                    Continue <span>→</span>
                  </button>
                ) : step === 13 ? (
                  <button
                    className="button button-dark button-wide"
                    type="button"
                    onClick={next}
                  >
                    Continue <span>→</span>
                  </button>
                ) : (
                  <button
                    className="button button-dark button-wide"
                    type="button"
                    onClick={finishProfile}
                    disabled={backendSaving}
                  >
                    {backendSaving ? "Saving profile…" : "Create my profile"} <span>{backendSaving ? "" : "→"}</span>
                  </button>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
  if (page === "profile") {
    return (
      <div className="app">
        <header className="navbar">
          <button
            className="brand"
            type="button"
            onClick={() => setPage("home")}
          >
            Team<span>Match</span>
          </button>

          <div className="nav-actions">
            <button
              className="nav-link"
              type="button"
              onClick={() => requireAuth("discover")}
            >
              Explore
            </button>

            <button
              className="nav-outline"
              type="button"
              onClick={() => {
                setIsCreatingProfile(false);
                setPage("onboarding");
                setStep(1);
              }}
            >
              Edit profile
            </button>

            <button
              className="nav-link"
              type="button"
              onClick={logout}
            >
              Log out
            </button>
          </div>
        </header>

<nav className="mobile-nav">
  <button type="button" onClick={() => setPage("discover")}>
    <span>⌂</span>
    Explore
  </button>

  <button type="button" onClick={() => setPage("requests")}>
    <span>♡</span>
    Requests
  </button>

  <button type="button" onClick={() => setPage("chat")}>
    <span>◌</span>
    Chat
  </button>

  <button type="button" onClick={() => setPage("profile")}>
    <span>●</span>
    Profile
  </button>
</nav>

<main className="profile-page">
          <div className="page-topline">
            <button
              className="back-btn"
              type="button"
              onClick={back}
            >
              ← Back
            </button>

            <span className="page-status">
              PROFILE SAVED ✓
            </span>
          </div>

          <div className="profile-intro">
            <div>
              <p className="eyebrow">YOUR PROFILE</p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "12px",
                }}
              >
                <h1 style={{ marginBottom: "0" }}>
                  {profile.firstName || "Your"}{" "}
                  {profile.lastName}
                </h1>

                {profile.focusType === "Passionate Interest" &&
                  featuredPassion && (
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "7px",
                        padding: "8px 12px",
                        borderRadius: "999px",
                        background: "var(--peach-soft)",
                        border: "1px solid #e6c7bc",
                        color: "var(--peach-dark)",
                        fontSize: "11px",
                        fontWeight: 800,
                        whiteSpace: "nowrap",
                      }}
                    >
                      <span
                        style={{
                          opacity: 0.72,
                          fontSize: "9px",
                          letterSpacing: "0.8px",
                          textTransform: "uppercase",
                        }}
                      >
                        Passionate Interest
                      </span>
                      <strong style={{ fontSize: "12px" }}>
                        {featuredPassion}
                      </strong>
                    </span>
                  )}
              </div>

              <p className="profile-meta">
                {profile.professionalRole ||
                  "Student"}{" "}
                · {profile.location || "India"}
                {calculatedAge
                  ? ` · ${calculatedAge} years old`
                  : ""}
              </p>
            </div>

            <button
              className="button button-dark"
              type="button"
              onClick={() => requireAuth("discover")}
            >
              Find teammates <span>→</span>
            </button>
          </div>

                    <div style={{ marginBottom: "28px" }} />

          <div className="profile-layout">
            <div className="profile-card">
              {profile.photos.length > 0 ? (
                <img
                  className="profile-photo"
                  src={profile.photos[0].url}
                  alt="Profile"
                />
              ) : (
                <div className="big-avatar">
                  {profile.firstName?.[0] || "Y"}
                </div>
              )}

              <div className="profile-card-copy">
                <h2>
                  {profile.firstName || "Your"}{" "}
                  {profile.lastName}
                </h2>

                <p>
                  {profile.about ||
                    "Tell people a little about yourself."}
                </p>
              </div>

              <ProfileSection title="Background">
                <div className="profile-detail-grid">
                  <div>
                    <span>Role</span>
                    <strong>
                      {profile.professionalRole ||
                        "Not added"}
                    </strong>
                  </div>

                  <div>
                    <span>Area</span>
                    <strong>
                      {profile.industry ||
                        "Not added"}
                    </strong>
                  </div>

                  <div>
                    <span>Education</span>
                    <strong>
                      {profile.education ||
                        "Not added"}
                    </strong>
                  </div>
                </div>
              </ProfileSection>

              {profile.prompts?.filter(
                (prompt) => prompt?.question && prompt?.answer
              ).length > 0 && (
                <ProfileSection title="My prompts">
                  <div className="profile-prompts">
                    {profile.prompts
                      .filter(
                        (prompt) => prompt?.question && prompt?.answer
                      )
                      .map((prompt, index) => (
                        <div
                          className="profile-prompt-card"
                          key={`${prompt.question}-${index}`}
                        >
                          <span className="prompt-question">
                            {prompt.question}
                          </span>
                          <p>{prompt.answer}</p>
                        </div>
                      ))}
                  </div>
                </ProfileSection>
              )}

              <ProfileSection title="Skills">
                <div className="tags">
                  {[
                    ...profile.subskills,
                    ...(profile.otherSkill
                      ? [profile.otherSkill]
                      : []),
                  ].map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </ProfileSection>

              <ProfileSection title="Interests">
                <div className="tags">
                  {[
                    ...profile.interests.filter(
                      (item) => item !== "Other"
                    ),
                    ...(profile.otherInterest
                      ? [profile.otherInterest]
                      : []),
                  ].map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </ProfileSection>

              {profile.focusType && profile.focusType !== "Passionate Interest" && (
                <ProfileSection title={profile.focusType}>
                  <p>{profile.focusDescription}</p>
                </ProfileSection>
              )}

              {profile.focusType === "Passionate Interest" &&
                profile.focusDescription && (
                  <ProfileSection title="About this interest">
                    <p>{profile.focusDescription}</p>
                  </ProfileSection>
                )}

              {profile.partnershipGender && (
                <ProfileSection title="Connection preference">
                  <p className="looking-highlight">
                    {profile.partnershipGender}
                  </p>
                </ProfileSection>
              )}
            </div>

            <aside className="profile-sidecard">
              <span className="mini-label">
                MATCHING PROFILE
              </span>

              <h3>
                Ready to find your next collaborator?
              </h3>

              <p>
                Your profile is ready to discover people
                with complementary strengths.
              </p>

              <button
                className="button button-dark button-wide"
                type="button"
                onClick={() => requireAuth("discover")}
              >
                Explore teammates <span>→</span>
              </button>
            </aside>
          </div>
        </main>
      </div>
    );
  }

  if (page === "discover") {
    return <Discover setPage={setPage} onBack={back} profile={profile} onLogout={logout} />;
  }

  if (page === "requests") {
    return <Requests setPage={setPage} onBack={back} profile={profile} />;
  }

  if (page === "chat") {
    return <Chat setPage={setPage} onBack={back} profile={profile} />;
  }

  if (page === "feedback") {
    return <Feedback setPage={setPage} onBack={back} />;
  }

  return null;
}

function Screen({
  kicker,
  title,
  subtitle,
  children,
}) {
  return (
    <section className="screen">
      <p className="step-label">{kicker}</p>
      <h1>{title}</h1>
      <p className="screen-subtitle">{subtitle}</p>
      {children}
    </section>
  );
}

function Field({ label, children }) {
  return (
    <div className="field">
      <label>{label}</label>
      {children}
    </div>
  );
}

function ChoiceGrid({
  items,
  value,
  onChange,
}) {
  return (
    <div className="choice-grid">
      {items.map((item) => (
        <Choice
          key={item}
          selected={value === item}
          onClick={() => onChange(item)}
        >
          <span>{item}</span>
        </Choice>
      ))}
    </div>
  );
}

function Choice({
  children,
  selected,
  onClick,
}) {
  return (
    <button
      type="button"
      className={
        selected
          ? "choice selected"
          : "choice"
      }
      onClick={onClick}
    >
      {children}

      <span className="choice-check">
        {selected ? "✓" : ""}
      </span>
    </button>
  );
}

function ProfileSection({
  title,
  children,
}) {
  return (
    <section className="profile-section">
      <h3>{title}</h3>
      {children}
    </section>
  );
}

function Discover({ setPage, onBack, profile, onLogout }) {
  const [filter, setFilter] = useState("All");
  const [focusFilter, setFocusFilter] = useState("All");
  const [interestFilter, setInterestFilter] = useState("All");
  const [profiles, setProfiles] = useState([]);
  const [connected, setConnected] = useState([]);
  const [pending, setPending] = useState([]);
  const [connecting, setConnecting] = useState([]);
  const [passed, setPassed] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadProfiles() {
      try {
        setLoading(true);
        setError("");

        const token = getAuthToken();

        if (!token) {
          const localProfiles = loadSavedProfiles();
          const otherProfiles = localProfiles.filter(
            (item) => item.id !== profile?.id
          );

          if (!cancelled) {
            setProfiles([
              ...otherProfiles.map(mapProfile),
              ...createDemoProfiles().map(mapProfile),
            ]);
          }
          return;
        }

        const [data, connectionData] = await Promise.all([
          apiRequest("/api/profiles"),
          apiRequest("/api/connections"),
        ]);

        if (cancelled) return;

        const connectionList = Array.isArray(connectionData)
          ? connectionData
          : [];

        const myUserId = profile?.userId || profile?.user?.id;

        const connectedProfileIds = [];
        const pendingProfileIds = [];

        for (const connection of connectionList) {
          const otherUserId =
            String(connection.requester) === String(myUserId)
              ? connection.recipient
              : connection.requester;

          if (!otherUserId) continue;

          if (connection.status === "accepted") {
            connectedProfileIds.push(String(otherUserId));
          } else if (connection.status === "pending") {
            pendingProfileIds.push(String(otherUserId));
          }
        }

        const rawProfiles = [
          ...(Array.isArray(data)
            ? data
            : Array.isArray(data.profiles)
            ? data.profiles
            : []),
          ...createDemoProfiles(),
        ];

        const mappedProfiles = rawProfiles
          .filter((item) => {
            const currentId = profile?.id;
            const currentEmail = profile?.email?.toLowerCase();

            return !(
              (currentId &&
                (item._id === currentId || item.id === currentId)) ||
              (currentEmail &&
                item.email?.toLowerCase() === currentEmail)
            );
          })
          .map(mapProfile);

        const connectedIds = new Set(connectedProfileIds);

        const connectedPeople = mappedProfiles.filter((person) =>
          connectedIds.has(String(person.userId))
        );

        setConnected(
          connectedPeople.map((person) => person.id)
        );

        const pendingIds = new Set(pendingProfileIds);
        const pendingPeople = mappedProfiles.filter((person) =>
          pendingIds.has(String(person.userId))
        );

        setPending(
          pendingPeople.map((person) => person.id)
        );

        setProfiles(mappedProfiles);
      } catch (err) {
        if (!cancelled) {
          setError(
            err.message ||
              "We couldn't load teammates right now."
          );
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    function cleanValues(values = []) {
      return [...new Set(
        values
          .filter(Boolean)
          .map((value) => String(value).trim().toLowerCase())
          .filter(Boolean)
      )];
    }

    function profileSkills(person) {
      return cleanValues([
        ...(Array.isArray(person?.subskills) ? person.subskills : []),
        ...(Array.isArray(person?.skills) ? person.skills : []),
        person?.otherSkill,
      ]);
    }

    function profileInterests(person) {
      return cleanValues([
        ...(Array.isArray(person?.interests)
          ? person.interests.filter((x) => x !== "Other")
          : []),
        person?.otherInterest,
      ]);
    }

    function textTokens(value) {
      return cleanValues(
        String(value || "")
          .replace(/[^a-zA-Z0-9&+#.-]/g, " ")
          .split(/\s+/)
      ).filter((word) => word.length > 2);
    }

function calculateMatch(person) {
  const mineSkills = profileSkills(profile);
  const theirSkills = profileSkills(person);
  const mineInterests = profileInterests(profile);
  const theirInterests = profileInterests(person);

  const sharedSkills = theirSkills.filter((skill) =>
    mineSkills.includes(skill)
  );

  const complementarySkills = theirSkills.filter(
    (skill) => !mineSkills.includes(skill)
  );

  const sharedInterests = theirInterests.filter((interest) =>
    mineInterests.includes(interest)
  );

  const sameIndustry =
    Boolean(profile.industry) &&
    Boolean(person.industry) &&
    profile.industry.trim().toLowerCase() ===
      person.industry.trim().toLowerCase();

  const sameLocation =
    Boolean(profile.location) &&
    Boolean(person.location) &&
    profile.location.trim().toLowerCase() ===
      person.location.trim().toLowerCase();

  const sameFocus =
    Boolean(profile.focusType) &&
    Boolean(person.focusType) &&
    profile.focusType === person.focusType;

  const myFocusText = textTokens(
    `${profile.focusType || ""} ${profile.focusDescription || ""}`
  );

  const theirFocusText = textTokens(
    `${person.focusType || ""} ${person.focusDescription || ""}`
  );

  const focusOverlap = theirFocusText.filter((word) =>
    myFocusText.includes(word)
  );

  let score = 35;
  const reasons = [];

if (sameFocus) score += 15;
if (sameIndustry) score += 15;
if (sameLocation) score += 10;

score += Math.min(sharedSkills.length * 8, 20);
score += Math.min(complementarySkills.length * 5, 15);
score += Math.min(sharedInterests.length * 10, 20);
score += Math.min(focusOverlap.length * 5, 15);

if (
  profile.focusType === "Investment Interest" &&
  person.focusType === "Startup Interest"
) {
  score += 20;
}

const roundedScore = Math.min(Math.round(score), 95);

  if (sharedInterests.length > 0) {
    reasons.push(
      `Shared interest: ${capitalize(sharedInterests[0])}`
    );
  }

  if (complementarySkills.length > 0) {
    reasons.push(
      `Complementary skills: ${complementarySkills
        .slice(0, 2)
        .map(capitalize)
        .join(" + ")}`
    );
  }

  if (sameIndustry) {
    reasons.push("Same field");
  }

  if (sameLocation) {
    reasons.push("Same location");
  }

  if (
    profile.focusType === "Investment Interest" &&
    person.focusType === "Startup Interest"
  ) {
    reasons.push("Startup + investor fit");
  }

  return {
    score: roundedScore,
    reasons: reasons.slice(0, 3),
  };
}

    function capitalize(value) {
      return String(value || "")
        .replace(/\b\w/g, (letter) => letter.toUpperCase());
    }

    function mapProfile(item, index = 0) {
      const firstName = item.firstName || item.user?.firstName || "";
      const lastName = item.lastName || item.user?.lastName || "";
      const name = `${firstName} ${lastName}`.trim() || "TeamMatch member";

      const skills = [
        ...(Array.isArray(item.subskills) ? item.subskills : []),
        ...(item.otherSkill ? [item.otherSkill] : []),
      ].filter(Boolean);

      const interests = [
        ...(Array.isArray(item.interests)
          ? item.interests.filter((x) => x !== "Other")
          : []),
        ...(item.otherInterest ? [item.otherInterest] : []),
      ].filter(Boolean);

      const matchData = calculateMatch(item);

      return {
        id: item._id || item.id || `profile-${index}`,
        userId: item.userId || item.user?.id || null,
        name,
        role: item.professionalRole || "TeamMatch member",
        field: item.industry || item.professionalRole || "Other",
        location: item.location || "",
        skills,
        interests,
        looking:
          item.focusDescription ||
          item.focusType ||
          "Open to collaboration",
        focusType: item.focusType || "",
        isDemo: Boolean(item.isDemo),
        match: matchData.score,
        reasons: matchData.reasons,
        initial:
          firstName?.[0]?.toUpperCase() ||
          name[0]?.toUpperCase() ||
          "T",
        photo:
          Array.isArray(item.photos) && item.photos.length > 0
            ? typeof item.photos[0] === "string"
              ? item.photos[0]
              : item.photos[0]?.url
            : null,
      };
    }

    loadProfiles();

    return () => {
      cancelled = true;
    };
  }, [profile]);

  const fields = useMemo(
    () => [
      "All",
      ...new Set(profiles.map((p) => p.field).filter(Boolean)),
    ],
    [profiles]
  );

  const focusOptions = ["All", "Passionate Interest", "Startup Interest", "Investment Interest"];

  const interestOptions = useMemo(() => {
    const source = focusFilter === "All"
      ? profiles
      : profiles.filter((p) => p.focusType === focusFilter);
    return [
      "All",
      ...new Set(source.flatMap((p) => p.interests || []).filter(Boolean)),
    ];
  }, [profiles, focusFilter]);

  const filtered = profiles
    .filter((p) => filter === "All" || p.field === filter)
    .filter((p) => focusFilter === "All" || p.focusType === focusFilter)
    .filter((p) => interestFilter === "All" || (p.interests || []).includes(interestFilter));

  const visiblePeople = filtered
    .filter((p) => !passed.includes(p.id))
    .sort((a, b) => b.match - a.match);

  return (
    <div className="app">
      <header className="navbar">
        <button
          className="brand"
          type="button"
          onClick={() => setPage("home")}
        >
          Team<span>Match</span>
        </button>

        <div className="nav-actions">
          <button
            className="nav-link"
            type="button"
            onClick={() => setPage("requests")}
          >
            ♥ Requests
          </button>

          <button
            className="nav-link"
            type="button"
            onClick={() => setPage("chat")}
          >
            Chat
          </button>

          <button
            className="nav-link"
            type="button"
            onClick={() => setPage("profile")}
          >
            Profile
          </button>

          <button
            className="nav-link"
            type="button"
            onClick={() => {
              onLogout();
            }}
          >
            Log out
          </button>
        </div>
      </header>

<nav className="mobile-nav">
  <button type="button" onClick={() => setPage("discover")}>
    <span>⌂</span>
    Explore
  </button>

  <button type="button" onClick={() => setPage("requests")}>
    <span>♡</span>
    Requests
  </button>

  <button type="button" onClick={() => setPage("chat")}>
    <span>◌</span>
    Chat
  </button>

  <button type="button" onClick={() => setPage("profile")}>
    <span>●</span>
    Profile
  </button>
</nav>

<main className="discover-page">
        <div className="page-topline">
          <button className="back-btn" type="button" onClick={onBack}>
            ← Back
          </button>
          <span className="page-status">DISCOVERY</span>
        </div>

        <p className="eyebrow">FIND YOUR TEAM</p>
        <h1>People worth meeting.</h1>
        <p className="screen-subtitle">
          Explore people whose strengths and goals could complement your own.
        </p>

        {error && (
          <div
            className="connection-banner"
            style={{ marginTop: "24px" }}
          >
            <div>
              <span className="success-dot">!</span>
              <div>
                <strong>Couldn't load teammates</strong>
                <small>{error}</small>
              </div>
            </div>
            <button
              type="button"
              className="button button-light"
              onClick={() => window.location.reload()}
            >
              Try again
            </button>
          </div>
        )}

        <div className="discover-toolbar">
          <div className="filter-row">
            <strong style={{ width: "100%", fontSize: "12px" }}>Focus</strong>
            {focusOptions.map((item) => (
              <button type="button" key={item} className={focusFilter === item ? "filter active" : "filter"} onClick={() => { setFocusFilter(item); setInterestFilter("All"); setPassed([]); }}>
                {item}
              </button>
            ))}
          </div>

          <div className="filter-row" style={{ marginTop: "10px", alignItems: "center" }}>
            <strong style={{ fontSize: "12px" }}>Industry</strong>
            {fields.map((item) => (
              <button type="button" key={item} className={filter === item ? "filter active" : "filter"} onClick={() => { setFilter(item); setPassed([]); }}>
                {item}
              </button>
            ))}
            <select value={interestFilter} onChange={(e) => { setInterestFilter(e.target.value); setPassed([]); }} style={{ minWidth: "180px", padding: "9px 12px", border: "1px solid var(--line)", borderRadius: "999px", background: "white" }}>
              {interestOptions.map((item) => <option key={item} value={item}>{item === "All" ? "Any interest" : item}</option>)}
            </select>
          </div>

          <span className="result-count">
            {loading ? "Loading..." : `${visiblePeople.length} profiles`}
          </span>
        </div>

        {loading ? (
          <div className="empty-state">
            <span className="empty-mark">···</span>
            <h2>Finding people for you.</h2>
            <p>Loading profiles from TeamMatch.</p>
          </div>
        ) : (
          <>
            <div className="people-grid">
              {visiblePeople.map((person, index) => (
                <article className="person-card" key={person.id}>
                  <div className="card-head">
                    <span className="match-score">{person.match}% fit</span>
                    <span className="card-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="person-top">
                    {person.photo ? (
                      <img
                        className="avatar"
                        src={person.photo}
                        alt={person.name}
                      />
                    ) : (
                      <div className="avatar">{person.initial}</div>
                    )}
                    <div>
                      <h2>{person.name}</h2>
                      <p>
                        {person.role}
                        {person.field ? ` · ${person.field}` : ""}
                      </p>
                    </div>
                  </div>

                  {person.skills.length > 0 && (
                    <div className="tags">
                      {person.skills.slice(0, 5).map((skill) => (
                        <span key={skill}>{skill}</span>
                      ))}
                    </div>
                  )}

                  {person.interests.length > 0 && (
  <div className="looking">
    <small>Interested in</small>
    <strong>
      {person.interests.slice(0, 2).join(" · ")}
    </strong>
  </div>
)}

{person.prompts?.filter(
  (prompt) => prompt?.question && prompt?.answer
).length > 0 && (
  <div className="looking">
    <small>{person.prompts[0].question}</small>
    <strong>{person.prompts[0].answer}</strong>
  </div>
)}

                  <div className="looking">
                    <small>Focus</small>
                    <strong>{person.looking}</strong>
                  </div>

                  {person.reasons?.length > 0 && (
                    <div className="match-reasons">
                      <small>Why you match</small>
                      <div className="tags">
                        {person.reasons.map((reason) => (
                          <span key={reason}>{reason}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="card-actions">
                    <button
                      type="button"
                      className="reject"
                      onClick={() =>
                        setPassed((current) => [...current, person.id])
                      }
                    >
                      Pass
                    </button>

                    <button
                      type="button"
                      className="button button-dark card-connect"
                      disabled={
                        person.isDemo ||
                        connected.includes(person.id) ||
                        pending.includes(person.id) ||
                        connecting.includes(person.id)
                      }
                      onClick={async () => {
                        if (
                          connected.includes(person.id) ||
                          pending.includes(person.id)
                        ) {
                          return;
                        }

                        try {
                          setConnecting((current) => [
                            ...current,
                            person.id,
                          ]);

                          await apiRequest("/api/connections", {
                            method: "POST",
                            body: JSON.stringify({
                              profileId: person.id,
                            }),
                          });

                          setPending((current) => [
                            ...new Set([...current, person.id]),
                          ]);
                        } catch (err) {
                          setError(
                            err.message ||
                              "We couldn't send the connection request."
                          );
                        } finally {
                          setConnecting((current) =>
                            current.filter((id) => id !== person.id)
                          );
                        }
                      }}
                    >
                      {person.isDemo
                        ? "Demo profile"
                        : connected.includes(person.id)
                        ? "Connected ✓"
                        : pending.includes(person.id)
                        ? "Request sent"
                        : connecting.includes(person.id)
                        ? "Sending..."
                        : "Connect"}
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {connected.length > 0 && (
              <div className="connection-banner">
                <div>
                  <span className="success-dot">✓</span>
                  <div>
                    <strong>Connection request sent</strong>
                    <small>Your next step is a conversation.</small>
                  </div>
                </div>
                <button
                  type="button"
                  className="button button-light"
                  onClick={() => setPage("feedback")}
                >
                  Leave feedback →
                </button>
              </div>
            )}

            {visiblePeople.length === 0 && connected.length === 0 && (
              <div className="empty-state">
                <span className="empty-mark">—</span>
                <h2>No teammates found yet.</h2>
                <p>
                  Create another profile or try a different category.
                </p>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}


function Requests({ setPage, onBack, profile }) {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [busyId, setBusyId] = useState(null);

  async function loadRequests() {
    try {
      setLoading(true);
      setError("");

      const [myProfile, connectionData, profileData] =
        await Promise.all([
          apiRequest("/api/profiles/me"),
          apiRequest("/api/connections"),
          apiRequest("/api/profiles"),
        ]);

      const currentProfile = myProfile?.profile || myProfile || {};
      const myUserId =
        currentProfile.userId ||
        profile?.userId ||
        profile?.user?.id;

      const connections = Array.isArray(connectionData)
        ? connectionData
        : [];

      const allProfiles = Array.isArray(profileData)
        ? profileData
        : Array.isArray(profileData?.profiles)
        ? profileData.profiles
        : [];

      const incoming = connections.filter(
        (connection) =>
          connection.status === "pending" &&
          String(connection.recipient) === String(myUserId)
      );

      const cards = incoming
        .map((connection) => {
          const person = allProfiles.find(
            (item) =>
              String(item.userId) ===
              String(connection.requester)
          );

          if (!person) return null;

          const firstName = person.firstName || "";
          const lastName = person.lastName || "";
          const name =
            `${firstName} ${lastName}`.trim() ||
            "TeamMatch member";

          const skills = [
            ...(Array.isArray(person.subskills)
              ? person.subskills
              : []),
            ...(person.otherSkill
              ? [person.otherSkill]
              : []),
          ].filter(Boolean);

          const interests = [
            ...(Array.isArray(person.interests)
              ? person.interests.filter(
                  (item) => item !== "Other"
                )
              : []),
            ...(person.otherInterest
              ? [person.otherInterest]
              : []),
          ].filter(Boolean);

          const photo =
            Array.isArray(person.photos) &&
            person.photos.length > 0
              ? typeof person.photos[0] === "string"
                ? person.photos[0]
                : person.photos[0]?.url
              : null;

          return {
            connection,
            person,
            name,
            skills,
            interests,
            photo,
            initial:
              firstName?.[0]?.toUpperCase() ||
              name[0]?.toUpperCase() ||
              "T",
          };
        })
        .filter(Boolean);

      setRequests(cards);
    } catch (err) {
      setError(
        err.message ||
          "We couldn't load your requests."
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadRequests();
  }, []);

  async function respond(connectionId, status) {
    try {
      setBusyId(connectionId);

      await apiRequest(
        `/api/connections/${connectionId}`,
        {
          method: "PATCH",
          body: JSON.stringify({ status }),
        }
      );

      setRequests((current) =>
        current.filter(
          (item) =>
            String(item.connection._id) !==
            String(connectionId)
        )
      );
    } catch (err) {
      setError(
        err.message ||
          "We couldn't update this request."
      );
    } finally {
      setBusyId(null);
    }
  }

  return (
    <div className="app">
      <header className="navbar">
        <button
          className="brand"
          type="button"
          onClick={() => setPage("home")}
        >
          Team<span>Match</span>
        </button>

        <div className="nav-actions">
          <button
            className="nav-link"
            type="button"
            onClick={() => setPage("discover")}
          >
            Explore
          </button>

          <button
            className="nav-link"
            type="button"
            onClick={() => setPage("profile")}
          >
            Profile
          </button>
        </div>
      </header>

<nav className="mobile-nav">
  <button type="button" onClick={() => setPage("discover")}>
    <span>⌂</span>
    Explore
  </button>

  <button type="button" onClick={() => setPage("requests")}>
    <span>♡</span>
    Requests
  </button>

  <button type="button" onClick={() => setPage("chat")}>
    <span>◌</span>
    Chat
  </button>

  <button type="button" onClick={() => setPage("profile")}>
    <span>●</span>
    Profile
  </button>
</nav>

<main className="discover-page">
        <div className="page-topline">
          <button
            className="back-btn"
            type="button"
            onClick={onBack}
          >
            ← Back
          </button>

          <span className="page-status">
            CONNECTIONS
          </span>
        </div>

        <p className="eyebrow">YOUR PEOPLE</p>

        <h1>Connection requests.</h1>

        <p className="screen-subtitle">
          People who want to connect with you.
        </p>

        {error && (
          <div
            className="connection-banner"
            style={{ marginTop: "24px" }}
          >
            <div>
              <span className="success-dot">!</span>
              <div>
                <strong>Something went wrong</strong>
                <small>{error}</small>
              </div>
            </div>
          </div>
        )}

        {loading ? (
          <div className="empty-state">
            <span className="empty-mark">···</span>
            <h2>Loading requests.</h2>
            <p>Checking your connection requests.</p>
          </div>
        ) : requests.length === 0 ? (
          <div className="empty-state">
            <span className="empty-mark">♡</span>
            <h2>No new requests.</h2>
            <p>
              When someone wants to connect with you,
              their request will appear here.
            </p>

            <button
              className="button button-dark"
              type="button"
              onClick={() => setPage("discover")}
            >
              Explore teammates →
            </button>
          </div>
        ) : (
          <div className="people-grid">
            {requests.map(
              ({
                connection,
                person,
                name,
                skills,
                interests,
                photo,
                initial,
              }) => (
                <article
                  className="person-card"
                  key={connection._id}
                >
                  <div className="card-head">
                    <span className="match-score">
                      NEW REQUEST
                    </span>
                  </div>

                  <div className="person-top">
                    {photo ? (
                      <img
                        className="avatar"
                        src={photo}
                        alt={name}
                      />
                    ) : (
                      <div className="avatar">
                        {initial}
                      </div>
                    )}

                    <div>
                      <h2>{name}</h2>
                      <p>
                        {person.professionalRole ||
                          "TeamMatch member"}
                        {person.industry
                          ? ` · ${person.industry}`
                          : ""}
                      </p>
                    </div>
                  </div>

                  {skills.length > 0 && (
                    <div className="tags">
                      {skills.slice(0, 5).map(
                        (skill) => (
                          <span key={skill}>
                            {skill}
                          </span>
                        )
                      )}
                    </div>
                  )}

                  {interests.length > 0 && (
                    <div className="looking">
                      <small>Interested in</small>
                      <strong>
                        {interests
                          .slice(0, 2)
                          .join(" · ")}
                      </strong>
                    </div>
                  )}

                  <div className="looking">
                    <small>Focus</small>
                    <strong>
                      {person.focusDescription ||
                        person.focusType ||
                        "Open to collaboration"}
                    </strong>
                  </div>

                  {person.about && (
                    <p className="person-about">
                      {person.about}
                    </p>
                  )}

                  <div className="card-actions">
                    <button
                      type="button"
                      className="reject"
                      disabled={busyId === connection._id}
                      onClick={() =>
                        respond(
                          connection._id,
                          "rejected"
                        )
                      }
                    >
                      Reject
                    </button>

                    <button
                      type="button"
                      className="button button-dark card-connect"
                      disabled={busyId === connection._id}
                      onClick={() =>
                        respond(
                          connection._id,
                          "accepted"
                        )
                      }
                    >
                      {busyId === connection._id
                        ? "Updating..."
                        : "Accept"}
                    </button>
                  </div>
                </article>
              )
            )}
          </div>
        )}
      </main>
    </div>
  );
}


function Chat({ setPage, onBack, profile }) {
  const [people, setPeople] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [draft, setDraft] = useState("");
  const [myUserId, setMyUserId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadChat() {
    try {
      setLoading(true);
      setError("");

      const [connectionData, profileData, meData] =
        await Promise.all([
          apiRequest("/api/connections"),
          apiRequest("/api/profiles"),
          apiRequest("/api/profiles/me"),
        ]);

      const me = meData?.profile || meData || {};

      const currentUserId =
        me.userId ||
        me.user?.id ||
        profile?.userId ||
        profile?.user?.id;

      if (!currentUserId) {
        throw new Error("Could not identify your account.");
      }

      setMyUserId(String(currentUserId));

      const accepted = (
        Array.isArray(connectionData)
          ? connectionData
          : []
      ).filter((c) => c.status === "accepted");

      const allProfiles = Array.isArray(profileData)
        ? profileData
        : Array.isArray(profileData?.profiles)
        ? profileData.profiles
        : [];

      const connectedPeople = accepted
        .map((connection) => {
          const otherUserId =
            String(connection.requester) ===
            String(currentUserId)
              ? connection.recipient
              : connection.requester;

          const person = allProfiles.find(
            (item) =>
              String(item.userId) ===
              String(otherUserId)
          );

          if (!person) return null;

          return {
            userId: String(otherUserId),
            connectionId: connection._id,
            name:
              `${person.firstName || ""} ${
                person.lastName || ""
              }`.trim() || "TeamMatch member",
            role:
              person.professionalRole ||
              person.industry ||
              "",
            photo:
              Array.isArray(person.photos) &&
              person.photos.length
                ? typeof person.photos[0] === "string"
                  ? person.photos[0]
                  : person.photos[0]?.url
                : null,
            initial: (
              person.firstName || "T"
            )
              .charAt(0)
              .toUpperCase(),
          };
        })
        .filter(Boolean);

      setPeople(connectedPeople);

      if (
        !selectedUserId &&
        connectedPeople.length > 0
      ) {
        setSelectedUserId(
          connectedPeople[0].userId
        );
      }
    } catch (err) {
      setError(
        err.message || "Could not load your chats."
      );
    } finally {
      setLoading(false);
    }
  }

  async function loadMessages(userId) {
    if (!userId) return;

    try {
      setError("");

      const data = await apiRequest(
        `/api/messages/${userId}`
      );

      setMessages(
        Array.isArray(data)
          ? data
          : data.messages || []
      );
    } catch (err) {
      setError(
        err.message || "Could not load messages."
      );
    }
  }

  useEffect(() => {
    loadChat();
  }, []);

  useEffect(() => {
    if (selectedUserId) {
      loadMessages(selectedUserId);
    }
  }, [selectedUserId]);

  async function sendMessage() {
    const message = draft.trim();

    if (!message || !selectedUserId) return;

    try {
      setError("");

      const data = await apiRequest(
        "/api/messages",
        {
          method: "POST",
          body: JSON.stringify({
            recipientId: selectedUserId,
            text: message,
          }),
        }
      );

      const newMessage =
        data.message || data;

      setMessages((current) => [
        ...current,
        newMessage,
      ]);

      setDraft("");
    } catch (err) {
      setError(
        err.message || "Could not send message."
      );
    }
  }

  async function removeConnection() {
    const selected = people.find(
      (person) =>
        person.userId === selectedUserId
    );

    if (!selected) return;

    const confirmed = window.confirm(
      `Remove ${selected.name} from your connections?`
    );

    if (!confirmed) return;

    try {
      setError("");

      await apiRequest(
        `/api/connections/${selected.connectionId}`,
        {
          method: "DELETE",
        }
      );

      setPeople((current) =>
        current.filter(
          (person) =>
            person.connectionId !==
            selected.connectionId
        )
      );

      setSelectedUserId(null);
      setMessages([]);
    } catch (err) {
      setError(
        err.message ||
          "Could not remove connection."
      );
    }
  }

  const selected = people.find(
    (person) =>
      person.userId === selectedUserId
  );

  return (
    <div className="app">
      <header className="navbar">
        <button
          className="brand"
          type="button"
          onClick={() => setPage("home")}
        >
          Team<span>Match</span>
        </button>

        <div className="nav-actions">
  <button
    className="nav-link"
    type="button"
    onClick={() => setPage("discover")}
  >
    Explore
  </button>

  <button
    className="nav-link"
    type="button"
    onClick={() => setPage("requests")}
  >
    ♥ Requests
  </button>

  <button
    className="nav-link"
    type="button"
    onClick={() => setPage("chat")}
  >
    Chat
  </button>

  <button
    className="nav-link"
    type="button"
    onClick={() => setPage("profile")}
  >
    Profile
  </button>
</div>
           </header>

      <nav className="mobile-nav">
        <button type="button" onClick={() => setPage("discover")}>
          <span>⌂</span>
          Explore
        </button>

        <button type="button" onClick={() => setPage("requests")}>
          <span>♡</span>
          Requests
        </button>

        <button type="button" onClick={() => setPage("chat")}>
          <span>◌</span>
          Chat
        </button>

         <button type="button" onClick={() => setPage("profile")}>
          <span>●</span>
          Profile
        </button>
      </nav>

      <main className="discover-page">
        <div className="page-topline">
          <button
            className="back-btn"
            type="button"
            onClick={onBack}
          >
            ← Back
          </button>

          <span className="page-status">
            MESSAGES
          </span>
        </div>

        <p className="eyebrow">
          YOUR CONVERSATIONS
        </p>

        <h1>Talk to your people.</h1>

        <p className="screen-subtitle">
          Chat with people you have connected with.
        </p>

        {error && (
          <div
            className="connection-banner"
            style={{ marginTop: "20px" }}
          >
            <div>
              <span className="success-dot">
                !
              </span>

              <div>
                <strong>
                  Something went wrong
                </strong>

                <small>{error}</small>
              </div>
            </div>
          </div>
        )}

        {loading ? (
          <div className="empty-state">
            <span className="empty-mark">
              ···
            </span>

            <h2>Loading chats.</h2>
          </div>
        ) : people.length === 0 ? (
          <div className="empty-state">
            <span className="empty-mark">
              ♡
            </span>

            <h2>
              No conversations yet.
            </h2>

            <p>
              You need to accept a connection
              before you can chat.
            </p>

            <button
              className="button button-dark"
              type="button"
              onClick={() =>
                setPage("discover")
              }
            >
              Find teammates →
            </button>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "280px minmax(0, 1fr)",
              gap: "20px",
              marginTop: "30px",
            }}
          >
            <section
              className="profile-card"
              style={{ padding: "14px" }}
            >
              <div
                style={{
                  padding: "8px 10px 14px",
                  fontWeight: 700,
                }}
              >
                Connections
              </div>

              {people.map((person) => (
                <button
                  key={person.userId}
                  type="button"
                  onClick={() =>
                    setSelectedUserId(
                      person.userId
                    )
                  }
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "13px",
                    border: 0,
                    borderRadius: "16px",
                    background:
                      selectedUserId ===
                      person.userId
                        ? "var(--peach-soft)"
                        : "transparent",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  {person.photo ? (
                    <img
                      src={person.photo}
                      alt={person.name}
                      style={{
                        width: "46px",
                        height: "46px",
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <div className="avatar">
                      {person.initial}
                    </div>
                  )}

                  <div>
                    <strong>
                      {person.name}
                    </strong>

                    <small
                      style={{
                        display: "block",
                        color: "#777",
                        marginTop: "3px",
                      }}
                    >
                      {person.role}
                    </small>
                  </div>
                </button>
              ))}
            </section>

            <section
              className="profile-card"
              style={{
                minHeight: "520px",
                display: "flex",
                flexDirection: "column",
                padding: "24px",
              }}
            >
              {selected && (
                <>
                  <div
                    style={{
                      paddingBottom: "18px",
                      borderBottom:
                        "1px solid var(--line)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent:
                        "space-between",
                      gap: "15px",
                    }}
                  >
                    <div>
                      <strong
                        style={{
                          fontSize: "20px",
                        }}
                      >
                        {selected.name}
                      </strong>

                      <small
                        style={{
                          display: "block",
                          color: "#777",
                          marginTop: "4px",
                        }}
                      >
                        {selected.role}
                      </small>
                    </div>

                    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                      <button className="button button-dark" type="button" onClick={() => { localStorage.setItem("teammatch_feedback_person", JSON.stringify(selected)); setPage("feedback"); }}>
                        Give feedback
                      </button>
                      <button
                        className="button button-light"
                        type="button"
                        onClick={removeConnection}
                      >
                        Remove connection
                      </button>
                    </div>
                  </div>

                  <div
                    style={{
                      flex: 1,
                      overflowY: "auto",
                      padding: "20px 0",
                      display: "flex",
                      flexDirection:
                        "column",
                      gap: "10px",
                    }}
                  >
                    {messages.length === 0 ? (
                      <div
                        style={{
                          textAlign: "center",
                          color: "#888",
                          margin: "auto",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "28px",
                            marginBottom: "8px",
                          }}
                        >
                          💬
                        </div>

                        <strong>
                          Start the conversation
                        </strong>

                        <div
                          style={{
                            marginTop: "5px",
                          }}
                        >
                          Say hello 👋
                        </div>
                      </div>
                    ) : (
                      messages.map(
                        (message) => {
                          const isMine =
                            String(
                              message.sender
                            ) ===
                            String(
                              myUserId
                            );

                          return (
                            <div
                              key={
                                message._id ||
                                message.id
                              }
                              style={{
                                alignSelf:
                                  isMine
                                    ? "flex-end"
                                    : "flex-start",
                                maxWidth:
                                  "75%",
                                padding:
                                  "11px 15px",
                                borderRadius:
                                  "16px",
                                background:
                                  isMine
                                    ? "#1f1d1a"
                                    : "#f1efec",
                                color:
                                  isMine
                                    ? "#fff"
                                    : "#1f1d1a",
                              }}
                            >
                              {message.text}
                            </div>
                          );
                        }
                      )
                    )}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      paddingTop: "15px",
                      borderTop:
                        "1px solid var(--line)",
                    }}
                  >
                    <input
                      value={draft}
                      onChange={(e) =>
                        setDraft(
                          e.target.value
                        )
                      }
                      onKeyDown={(e) => {
                        if (
                          e.key === "Enter"
                        ) {
                          sendMessage();
                        }
                      }}
                      placeholder="Write a message..."
                      style={{
                        flex: 1,
                      }}
                    />

                    <button
                      className="button button-dark"
                      type="button"
                      onClick={
                        sendMessage
                      }
                    >
                      Send
                    </button>
                  </div>

                  <small
                    style={{
                      marginTop: "8px",
                      color: "#888",
                    }}
                  >
                    Text chat only. Messages
                    cannot be edited or deleted.
                  </small>
                </>
              )}
            </section>
          </div>
        )}
      </main>
    </div>
  );
}

function Feedback({ setPage, onBack }) {
  const [feedbackPerson] = useState(() => {
    try { return JSON.parse(localStorage.getItem("teammatch_feedback_person") || "null"); } catch { return null; }
  });
  const [didMeet, setDidMeet] = useState(null);
  const [ratings, setRatings] =
    useState({
      communication: 0,
      teamwork: 0,
      leadership: 0,
      confidence: 0,
    });

  const [review, setReview] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const rate = (key, value) => {
    setRatings((current) => ({
      ...current,
      [key]: value,
    }));
  };

  if (submitted) {
    return (
      <div className="app centered">
        <div className="success-box">
          <div className="success-icon">✓</div>

          <p className="eyebrow">
            FEEDBACK RECEIVED
          </p>

          <h1>
            Thanks for helping TeamMatch grow.
          </h1>

          <p>
            Your feedback helps improve future
            connections and the quality of the
            community.
          </p>

          <button
            className="button button-dark"
            type="button"
            onClick={() =>
              setPage("discover")
            }
          >
            Back to teammates <span>→</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <main className="feedback-page">
        <div className="page-topline">
          <button
            className="back-btn"
            type="button"
            onClick={onBack}
          >
            ← Back
          </button>

          <span className="page-status">
            POST-MEETING
          </span>
        </div>

        <p className="eyebrow">
          AFTER YOUR MEETING
        </p>

        <h1>How did it feel?</h1>

        <p className="screen-subtitle">
          A few honest ratings help TeamMatch
          understand what makes a great teammate.
        </p>

        <div className="feedback-layout">
          <section className="feedback-card">
            <div className="feedback-person">
              <div className="avatar">{feedbackPerson?.initial || "T"}</div>

              <div>
                <h2>{feedbackPerson?.name || "Your connection"}</h2>
                <p>{feedbackPerson?.role || "TeamMatch connection"}</p>
              </div>
            </div>

            <div style={{ padding: "18px 0", borderBottom: "1px solid #ebe9e2" }}>
              <strong>Did you meet this person?</strong>
              <div style={{ display: "flex", gap: "8px", marginTop: "10px" }}>
                <button type="button" className={didMeet === true ? "button button-dark" : "button button-light"} onClick={() => setDidMeet(true)}>Yes, we met</button>
                <button type="button" className={didMeet === false ? "button button-dark" : "button button-light"} onClick={() => setDidMeet(false)}>Not yet</button>
              </div>
            </div>

            <div className="rating-list">
              {Object.keys(ratings).map((key) => (
                <div
                  className="rating-row"
                  key={key}
                >
                  <div>
                    <strong>
                      {key.charAt(0).toUpperCase() +
                        key.slice(1)}
                    </strong>

                    <span>
                      Rate this quality
                    </span>
                  </div>

                  <div className="stars">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <button
                        type="button"
                        key={n}
                        className={
                          n <= ratings[key]
                            ? "star active"
                            : "star"
                        }
                        onClick={() =>
                          rate(key, n)
                        }
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <Field label="Anything you'd like to share?">
              <textarea
                rows="6"
                placeholder="What worked well? What could make the connection better?"
                value={review}
                onChange={(e) =>
                  setReview(e.target.value)
                }
              />
            </Field>

            <button
              className="button button-dark button-wide submit-btn"
              type="button"
              onClick={() => {
                if (didMeet === null) return;
                setSubmitted(true);
              }}
              disabled={didMeet === null}
            >
              Submit feedback <span>→</span>
            </button>
          </section>

          <aside className="feedback-sidecard">
            <span className="mini-label">
              WHY IT MATTERS
            </span>

            <h3>
              Great teams are built on more than skills.
            </h3>

            <p>
              Feedback helps surface communication,
              reliability and collaboration — qualities
              that a profile cannot always show.
            </p>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default App;
