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

import classNames from 'classnames';

interface IProps {
  type?: 'br' | 'bi';
  /** icon name */
  name: string;
  className?: string;
  size?: string;
  title?: string;
  onClick?: () => void;
}
const Icon: FC<IProps> = ({
  type = 'br',
  name,
  className,
  size,
  onClick,
  title,
}) => {
  // Handle Apache badge icon specially
  if (name === 'apache-badge') {
    return (
      <div
        className={classNames('apache-community-badge', className)}
        style={{ 
          ...(size && { 
            width: size, 
            height: size,
            fontSize: `${Math.max(8, parseInt(size.toString()) * 0.3)}px`
          }) 
        }}
        onClick={onClick}
        onKeyDown={onClick}
        title={title || "Apache Local Community Taipei"}
        role="button"
        tabIndex={0}
      >
        <div className="fw-bold">源</div>
      </div>
    );
  }

  return (
    <i
      className={classNames(type, `bi-${name}`, className)}
      style={{ ...(size && { fontSize: size }) }}
      onClick={onClick}
      onKeyDown={onClick}
      title={title}
    />
  );
};

export default Icon;
