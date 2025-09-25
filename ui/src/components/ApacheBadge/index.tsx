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
  showText?: boolean;
}

const ApacheBadge: FC<IProps> = ({ 
  size = 40, 
  className = '', 
  showText = false 
}) => {
  const badgeStyle = {
    width: `${size}px`,
    height: `${size}px`,
    fontSize: `${Math.max(8, size * 0.3)}px`,
  };

  return (
    <div 
      className={`apache-community-badge ${className}`}
      style={badgeStyle}
      title="Apache Local Community Taipei"
    >
      {showText ? (
        <div className="text-center">
          <div className="fw-bold">源</div>
          <div style={{ fontSize: '6px', lineHeight: 1 }}>APACHE</div>
        </div>
      ) : (
        <div className="fw-bold">源</div>
      )}
    </div>
  );
};

export default ApacheBadge;
