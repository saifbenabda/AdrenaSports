"use server"

export async function registerPingPong(formData: FormData) {
  // Simulate a delay to mimic server processing
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // In a real application, you would:
  // 1. Validate the form data
  // 2. Store the registration in a database
  // 3. Send confirmation email
  // 4. Handle errors appropriately

  const fullName = formData.get("fullName")
  const email = formData.get("email")
  const phone = formData.get("phone")

  console.log("Ping-Pong Registration:", { fullName, email, phone })

  // Return success
  return { success: true }
}

export async function registerFootball(formData: FormData) {
  // Simulate a delay to mimic server processing
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // In a real application, you would:
  // 1. Validate the form data
  // 2. Store the registration in a database
  // 3. Send confirmation email
  // 4. Handle errors appropriately

  const teamName = formData.get("teamName")
  const captainName = formData.get("captainName")
  const captainEmail = formData.get("captainEmail")
  const captainPhone = formData.get("captainPhone")

  console.log("Football Registration:", {
    teamName,
    captainName,
    captainEmail,
    captainPhone,
  })

  // Return success
  return { success: true }
}
