import { ref, onValue } from "firebase/database";
import { MemberType } from "../types/types";
import { firebaseDatabase } from "./index";

export const memberListener = async (
  callback_fn: (data: MemberType[]) => void
) => {
  const membersRef = ref(firebaseDatabase, "members");
  onValue(membersRef, (snapshot) => {
    const memberList: MemberType[] = Object.values(snapshot.val()).map(
      (member: any) => ({ ...member, id: member.umass_email.split("@")[0] })
    );
    callback_fn(memberList);
  });
};
