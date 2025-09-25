/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { FC } from 'react';

interface IProps {
  size?: number;
  className?: string;
}

const ApacheBadgeSVG: FC<IProps> = ({ size = 40, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg">
      {/* Outer Circle with Gradient */}
      <defs>
        <radialGradient id="goldGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#ffd700" />
          <stop offset="50%" stopColor="#ff8c00" />
          <stop offset="100%" stopColor="#e67e00" />
        </radialGradient>
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b4513" />
          <stop offset="100%" stopColor="#654321" />
        </linearGradient>
      </defs>

      {/* Main Circle */}
      <circle
        cx="50"
        cy="50"
        r="48"
        fill="url(#goldGradient)"
        stroke="#8b4513"
        strokeWidth="2"
      />

      {/* Inner Circle */}
      <circle
        cx="50"
        cy="50"
        r="42"
        fill="none"
        stroke="#8b4513"
        strokeWidth="1"
      />

      {/* Top Text: APACHE LOCAL COMMUNITY */}
      <text
        x="50"
        y="25"
        textAnchor="middle"
        fontSize="8"
        fill="url(#textGradient)"
        fontWeight="bold"
        letterSpacing="0.5">
        APACHE LOCAL COMMUNITY
      </text>

      {/* Bottom Text: TAIPEI */}
      <text
        x="50"
        y="85"
        textAnchor="middle"
        fontSize="10"
        fill="url(#textGradient)"
        fontWeight="bold"
        letterSpacing="1">
        TAIPEI
      </text>

      {/* Central Character: 源 */}
      <text
        x="50"
        y="58"
        textAnchor="middle"
        fontSize="24"
        fill="url(#textGradient)"
        fontWeight="bold"
        fontFamily="serif">
        源
      </text>

      {/* Decorative Elements - Cloud-like shapes around the character */}
      <ellipse
        cx="35"
        cy="45"
        rx="8"
        ry="4"
        fill="rgba(139, 69, 19, 0.3)"
        transform="rotate(-15 35 45)"
      />
      <ellipse
        cx="65"
        cy="45"
        rx="8"
        ry="4"
        fill="rgba(139, 69, 19, 0.3)"
        transform="rotate(15 65 45)"
      />

      {/* Glasses representation */}
      <circle
        cx="42"
        cy="52"
        r="3"
        fill="none"
        stroke="url(#textGradient)"
        strokeWidth="1"
      />
      <circle
        cx="58"
        cy="52"
        r="3"
        fill="none"
        stroke="url(#textGradient)"
        strokeWidth="1"
      />
      <line
        x1="45"
        y1="52"
        x2="55"
        y2="52"
        stroke="url(#textGradient)"
        strokeWidth="1"
      />

      {/* Smile */}
      <path
        d="M 40 60 Q 50 65 60 60"
        fill="none"
        stroke="url(#textGradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ApacheBadgeSVG;
