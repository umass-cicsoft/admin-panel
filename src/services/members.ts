import { ref, onValue, update } from "firebase/database";
import { MemberStatus, MemberType } from "../types/types";
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

export const updateMemberStatus = async (props: {
  id: string;
  newStatus: MemberStatus;
}) => {
  // given a list of user ids and the desired status set each user's status to the newStatus
  const memberRef = ref(firebaseDatabase, `members/${props.id}`);
  update(memberRef, {
    status: props.newStatus,
  })
    .then(() => {
      console.log("updated member status");
    })
    .catch((error) => {
      console.log("error updating member status", error);
    });
};
