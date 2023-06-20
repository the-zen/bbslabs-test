import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

interface VercelInviteUserEmailProps {
  invitedByUsername?: string;
}

export const VercelInviteUserEmail = ({
  invitedByUsername,
}: VercelInviteUserEmailProps) => {
  if (!invitedByUsername) {
    throw new Error("invitedByUsername is required");
  }
  const previewText = `Join ${invitedByUsername} on Vercel`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-[40px] w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
            <Section className="mt-[32px]">
              <Img
                src="https://red-quintessential-lion-606.mypinata.cloud/ipfs/QmUNQQDgoaZxy2YqZGPdZ8z4oa8JtuRqgtWnRMC4VXUPL5"
                width="40"
                height="37"
                alt="Vercel"
                className="mx-auto my-0"
              />
            </Section>
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              Join <strong>BBSLabs</strong>
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              Hello user,
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              We are excited to invite you to our new ecosystem
            </Text>
            <Section className="mb-[32px] mt-[32px] text-center">
              <Button
                pX={20}
                pY={12}
                className="rounded bg-[#000000] text-center text-[12px] font-semibold text-white no-underline"
                href="https://www.bbslabs.io"
              >
                Learn now
              </Button>
            </Section>
            <Text className="text-[14px] leading-[24px] text-black">
              or copy and paste this URL into your browser:{" "}
              <Link
                href="https://www.bbslabs.io"
                className="text-blue-600 no-underline"
              >
                https://www.bbslabs.io
              </Link>
            </Text>
            <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />
            <Text className="text-[12px] leading-[24px] text-[#666666]">
              This invitation was intended for{" "}
              <span className="text-black">User</span>.This invite was sent from{" "}
              <span className="text-black">
                Blockchain Business School Labs
              </span>{" "}
              located in <span className="text-black">Chihuahua México</span>.
              If you were not expecting this, you can ignore this email. If you
              are concerned about your safety, please reply to this email to get
              in touch with us.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default VercelInviteUserEmail;
