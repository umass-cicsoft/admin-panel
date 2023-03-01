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

/**
 * @descipriton Update the Status for a list of Members given their ids and desired status
 *
 * @param {string[]} ids - A list of member ids
 * @param {MemberStatus} newStatus - The new status to set for the members.
 */
export const updateMemberStatus = async (
  ids: string[],
  newStatus: MemberStatus
) => {
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

/**
 * @descipriton Update the Role for a list of Members given their ids and desired role
 *
 * @param {string[]} ids - A list of member ids
 * @param {MemberRole} newRole - The new role to set for the members.
 */
export const updateMemberRole = async (ids: string[], newRole: MemberRole) => {
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

/**
 * @descipriton Sort a list of Members based on a key.
 *
 * @param {MemberType[]} members - A list of objects.
 * @param {keyof MemberType} key - The key to sort by.
 * If it's a number, sort numerically. If it's a string, sort alphabetically.
 *
 * @returns {MemberType[]} The sorted list of members.
 */
export const sortMembers = (
  members: MemberType[],
  key: keyof MemberType,
  isAsc: boolean
): MemberType[] => {
  const sortedMembers = members.sort((a, b) => {
    if (a[key] === undefined && b[key] !== undefined) {
      return -1;
    } else if (a[key] !== undefined && b[key] === undefined) {
      return 1;
    } else if (a[key] === undefined && b[key] === undefined) {
      return 0;
    } else if (typeof a[key] === "number") {
      return Number(a[key]) - Number(b[key]);
    } else if (typeof a[key] === "string") {
      return String(a[key])!.localeCompare(String(b[key]));
    } else {
      return 0;
    }
  });

  return isAsc ? sortedMembers : sortedMembers.reverse();
};

/**
 * @description Filter a list of Members based on a key and value.
 *
 * @param {MemberType[]} members - A list of objects.
 * @param {keyof MemberType} key - The key to filter by.
 * @param {any} value - The value to filter by.
 *
 * @returns {MemberType[]} The filtered list of members.
 *
 * @example
 * filterMembers(members, "role", MemberRole.ADMIN)
 * returns a list of members with the role of admin
 *  */
export const filterMembers = <T extends keyof MemberType>(
  members: MemberType[],
  key: T,
  value: MemberType[T]
): MemberType[] => {
  return members.filter((member) => member[key] === value);
};
