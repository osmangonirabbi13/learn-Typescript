//Abstraction -> idea -> Implemenation
/*
1.interface
2. abstract class
*/
//Idea
interface MediaPlayer {
  play(): void;
  pause(): void;
  stop(): void;
}

//Implemenation

class MusicPlayer implements MediaPlayer {
  play(): void {
    console.log("Playing Music...............");
  }
  pause(): void {
    console.log("Music Paused.....");
  }
  stop(): void {
    console.log("Music Stop....");
  }
}

const osmanPlayer = new MusicPlayer(); //instance
osmanPlayer.pause();

//abstract class kkhono instance turi korte parbo na

abstract class MediaPlayer1 {
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
}

//create a child class then Implemenation

class OsmanPlayer1 extends MediaPlayer1 {
  play(): void {
    console.log("Playing Music...............");
  }
  pause(): void {
    console.log("Music Paused.....");
  }
  stop(): void {
    console.log("Music Stop....");
  }
}

const osmanPlayer1 = new OsmanPlayer1()
osmanPlayer.play()