import { ref, onValue, update, get } from "firebase/database";
import { MemberRole, MemberStatus, MemberType } from "../types/types";
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

export const updateMemberStatus = async (
  ids: string[],
  newStatus: MemberStatus
) => {
  // given a list of user ids and the desired status set each user's status to the newStatus
  ids.forEach((id) => {
    const memberRef = ref(firebaseDatabase, `members/${id}`);
    update(memberRef, {
      status: newStatus,
    })
      .then(() => {
        console.log("updated member status");
      })
      .catch((error) => {
        console.log("error updating member status", error);
      });
  });
};

export const updateMemberRole = async (ids: string[], newRole: MemberRole) => {
  // given a list of user ids and the desired status set each user's status to the newStatus
  ids.forEach((id) => {
    const memberRef = ref(firebaseDatabase, `members/${id}`);
    get(memberRef)
      .then((snapshot) => {
        if (
          snapshot.exists() &&
          snapshot.val().status === MemberStatus.MEMBER
        ) {
          update(memberRef, {
            role: newRole,
          })
            .then(() => {
              console.log("updated member role");
            })
            .catch((error) => {
              console.log("error updating member role", error);
            });
        } else {
          console.log("User is non-member or does not exist");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  });
};
