import init from './init'
import playlists from './playlists'
import currentPlaylist from './currentPlaylist'
import UI from './UI'
import videoSuggestions from './videoSuggestions'
import streaming from './streaming'

module.exports = Object.assign(
  {},
  init,
  playlists,
  currentPlaylist,
  UI,
  videoSuggestions,
  streaming,
  {
    setLeaderboard: (state, actions, leaderboard) => ({ leaderboard }),
    handleDlLink: (state, actions, data) => {
      if (state.currentPlaylist.playlistid === data.playlistid) {
        // update currentplaylist tracks
        actions.updateCurrentPlaylistWithDl(data);
      }
      actions.updateCacheWithDL(data);
    },

    handleLocalAudio: (state, actions, data) => {
      if (state.currentPlaylist.playlistid === data.playlistid) {
        // update currentplaylist tracks
        actions.updateCurrentPlaylistWithDl(data);
      }
      actions.updateCacheWithDL(data);
    },


    playlistRoute: (state, actions, id) => {
      // console.log('found params', data.params.id);
      actions.connectToPlaylistRooms([id]);
      actions.getPlaylist(id);

    },

    goHome: (state, actions, id) => {
      actions.router.go('/');
      return {
        currentPlaylist: {}
      };
    },

    error: (state, actions, error) => {
      console.error(error);
    }
  }
);
