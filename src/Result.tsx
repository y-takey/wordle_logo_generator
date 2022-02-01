import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { toPng } from "html-to-image";

import Row from "./Row";

interface Props {
  text: string;
}

const Result: React.FC<Props> = ({ text }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const onDownload = React.useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "wordle_image.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  if (!text) return null;

  const words = text.split("\n").filter((line) => line);
  const answer = words.pop() as string;

  return (
    <Card sx={{ textAlign: "start" }} variant="outlined">
      <CardContent sx={{ backgroundColor: "white" }} ref={ref}>
        {words.map((word, i) => (
          <Row key={i} word={word} answer={answer} />
        ))}
        <Row key="last" word={answer} answer={answer} />
      </CardContent>
      <CardActions>
        <Button variant="contained" onClick={onDownload}>
          ダウンロード
        </Button>
      </CardActions>
    </Card>
  );
};

export default Result;
