import React, { useState } from 'react';
import { CircleIconButton, MaterialIcon } from '../_shared/';
import {MediaPageStore} from "../../utils/stores";

function getTimestamp() {
  const videoPlayer = document.getElementsByTagName("video");
  return videoPlayer[0]?.currentTime;
}

function redirectToKnowledge() {
  let url;
  const timestamp = getTimestamp();
  if (timestamp) {
    const knowledge = MediaPageStore.get('media-knowledgebase').find(k => k.start <= timestamp && timestamp <= k.end);
    url = knowledge?.content;
  }

  if (url) {
    window.open(url);
  }
}

export function MediaKnowledgeButton(props) {
  return (
    <div className="download">
        <button onClick={redirectToKnowledge}>
          <CircleIconButton type="span">
            <MaterialIcon type="lightbulb" />
          </CircleIconButton>
          <span>KNOWLEDGE</span>
        </button>
    </div>
  );
}
