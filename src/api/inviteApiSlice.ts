import apiSlice from "./apiSlice";
import { Invite } from "../redux/interfaces/inviteState";

export const inviteApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getInvites: builder.query<Invite[], void>({
      query: () => "/invites",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Invite" as const, id })),
              "Invite",
            ]
          : ["Invite"],
    }),
    updateInvite: builder.mutation<
      Invite,
      Partial<Invite> & Pick<Invite, "id">
    >({
      query: (body) => ({
        url: `/invites/${body.id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Invite", id: arg.id }],
    }),
  }),
});

export const { useGetInvitesQuery, useUpdateInviteMutation } = inviteApiSlice;
