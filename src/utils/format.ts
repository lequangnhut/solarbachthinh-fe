export const formatPhoneNumber = (
  phoneNumber: string,
  countryCode: string = "+84",
): string => {
  let cleaned = phoneNumber.replace(/[^\d]/g, "");

  if (cleaned.startsWith("0")) {
    cleaned = cleaned.slice(1);
  }

  if (cleaned.startsWith(countryCode.replace("+", ""))) {
    const formatted = cleaned
      .slice(countryCode.length)
      .match(/(\d{3})(\d{3})(\d{3})/);
    return formatted
      ? `(${countryCode}) ${formatted[1]} ${formatted[2]} ${formatted[3]}`
      : phoneNumber;
  }

  const formatted = cleaned.match(/(\d{3})(\d{3})(\d{3})/);
  return formatted
    ? `(${countryCode}) ${formatted[1]} ${formatted[2]} ${formatted[3]}`
    : phoneNumber;
};

export const formatTrxId = (trxId: string) => {
  return `${trxId?.slice(0, 10)}...${trxId?.slice(
    trxId.length - 10,
    trxId.length,
  )}`;
};

// format phone number
export const formatVietnamPhoneNumber = (phoneNumber: string) => {
  phoneNumber = phoneNumber.replace(/[\s\-().]/g, "");
  if (phoneNumber === "") return "";

  if (phoneNumber.startsWith("0")) {
    phoneNumber = phoneNumber.slice(1);
  }

  if (!phoneNumber.startsWith("+84")) {
    phoneNumber = "+84" + phoneNumber;
  }

  return phoneNumber;
};

export const formatHiddenEmail = (email: string) => {
  email = email.trim();
  if (email === "") return "";
  let [username] = email.split("@");
  const domain = email.split("@")[1];
  if (username.length > 3) {
    username =
      username.slice(0, 3) + "***" + username.slice(12, username.length);
  }
  return `${username}@${domain}`;
};

export const formatUrl = (url: string): string => {
  try {
    const { hostname, pathname } = new URL(url);
    const cleanHostname = hostname.replace(/^www\./, "");
    const firstPathSegment = pathname.split("/").filter(Boolean)[0];

    return firstPathSegment
      ? `${cleanHostname}/${firstPathSegment}`
      : cleanHostname;
  } catch (error) {
    console.error("Invalid URL:", url);
    return url;
  }
};
