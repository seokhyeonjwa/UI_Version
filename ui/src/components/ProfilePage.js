import React from 'react';

function ProfilePage() {
  return (
    <div style={{ maxWidth: '800px', margin: '50px auto', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontWeight: 'bold', fontSize: '32px', marginBottom: '20px' }}>프로필</h1>

      {/* 증명사진 영역 */}
      <div style={{ marginBottom: '30px' }}>
        <img
          src="/photo.jpg"
          alt="증명사진"
          style={{
            width: '200px',
            height: '250px',
            borderRadius: '10px',
            objectFit: 'cover',
            border: '2px solid #ccc',
          }}
        />
      </div>

      {/* 개인 정보 */}
      <div style={{ textAlign: 'center', margin: '0 auto', maxWidth: '600px' }}>
  <p>
    <strong>이름:</strong> 홍석현, Hong Seokhyeon
  </p>
  <p>
    <strong>전화번호:</strong> 010-2616-3071
  </p>
  <p>
    <strong>이메일:</strong> hsh20155@gmail.com
  </p>
</div>

      {/* 자기소개 및 포부 */}
      <div
        style={{
          marginTop: '30px',
          padding: '20px',
          border: '1px solid #ddd',
          borderRadius: '10px',
          backgroundColor: '#f9f9f9',
        }}
      >
        <h3 style={{ fontSize: '24px', marginBottom: '15px' }}>자기소개</h3>
        <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>
          사용자 경험을 개선하는 웹 서비스를 개발하는 데 열정을 쏟고 있는 홍석현입니다. 대학 생활 동안 IT와 웹 개발에 대한 깊은 관심을 바탕으로 다양한 프로젝트와 실무적인 경험을 쌓아왔습니다.
        </p>
        <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>
          특히 졸업 프로젝트로 YouTube API를 활용한 동영상 검색 웹 서비스를 개발하며, React와 Node.js를 사용해 프론트엔드와 백엔드의 통합 작업을 진행했습니다. 이 프로젝트를 통해 사용자 로그인, 추천 알고리즘 설계, 그리고 UI/UX 설계의 중요성을 배웠고, 팀원들과의 협업을 통해 기술적 문제를 해결하며 성장할 수 있었습니다.
        </p>
        <p style={{ lineHeight: '1.6' }}>
          또한 개인 블로그 프로젝트를 준비하면서 Spring Boot와 React를 연동하여 풀스택 개발자로서의 역량을 키우고 있습니다. 이 블로그는 제 개발 여정을 기록하고, CS 지식 요약과 같은 학습 자료를 정리하며 저의 기술적 성장을 보여주는 공간이 될 것입니다.
        </p>

        <h3 style={{ fontSize: '24px', marginTop: '20px', marginBottom: '15px' }}>포부</h3>
        <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>
          저는 IT 업계에서 혁신적인 기술을 통해 사람들의 삶에 가치를 더하는 개발자가 되는 것을 목표로 하고 있습니다. 실무 경험과 기술적 깊이를 쌓아가며 체계적인 개발 환경을 익히고, 이후에는 노력한 것을 바탕으로 전문성을 발휘하며 더 나은 커리어를 쌓고 싶습니다.
        </p>
        <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>
          프로그래밍 언어와 프레임워크에 대한 지식뿐만 아니라, 사용자 중심의 문제 해결과 창의적인 아이디어를 바탕으로 실질적인 가치를 제공하는 서비스를 개발하고자 합니다. Spring Boot를 활용해 RESTful API 설계와 데이터베이스 모델링을 경험하며 효율적이고 확장 가능한 백엔드 구조를 설계한 바 있습니다.
        </p>
        <p style={{ lineHeight: '1.6' }}>
          이러한 경험을 통해 안정성과 유지보수를 고려한 시스템 구축에 자신감을 가지고 있습니다. 또한, 대학 시절부터 쌓아온 프로젝트 경험을 바탕으로, 새로운 기술 트렌드에 끊임없이 도전하며 더 나은 솔루션을 만들어내는 개발자로 성장하고 싶습니다. 제 커리어는 기술적인 성취에 그치지 않고, 다른 사람들에게 동기부여가 되고 영감을 줄 수 있는 사람이 되는 것입니다.
        </p>
      </div>
    </div>
  );
}

export default ProfilePage;
