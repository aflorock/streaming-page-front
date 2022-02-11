export interface Movie {
    title: string;
    description: string;
    programType: string;
    images: {
        PosterArt: {
            url: string;
            width: number;
            height: number;
        }
    }
    releaseYear: number;
  }