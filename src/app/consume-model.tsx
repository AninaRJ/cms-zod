import { componentSongModel } from '../../contentful/component-song-model'

  export default async function Page() {
    const songs = await componentSongModel.getAll()
    return <ul>
    {
        songs.map(song => <li key={song.sys.id}>
            <p>{song.fields.songName}</p>
            <p>{song.fields.singers}</p>
            <p>{song.fields.songDuration} / 5</p>
        </li>)
    }
</ul>
  }