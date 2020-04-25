pipeline{
  options {
  	skipStagesAfterUnstable()
  	buildDiscarder logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '', daysToKeepStr: '10', numToKeepStr: '')
	}
	agent {label 'marklogic-ui-component-library.eng.marklogic.com'}
	stages{
	  stage('Build'){
	    steps{
	      sh 'npm install;npm run build;npm run build-storybook;'
	    }

	  }
	  stage('Deploy'){
	    when {
        branch 'develop'
      }
      steps{
        sh 'docker rm -f storybook | true;docker rmi storybook | true;docker build . -t storybook;docker run -d -p 80:80 -p 443:443 --name storybook storybook;'
      }

	  }
	}

}
