import { createSelector } from 'reselect'

const profileState = (state) => state.profile

export const makeSelectUser = createSelector(
    profileState,
    (profile) => profile.user
)